import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { ImCross } from "react-icons/im";
import { IoIosWarning } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

type ToastProps = {
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
    position: 'top-left' | 'top-right' | 'top-center' | 'bottom-center' | 'bottom-left' | 'bottom-right';
    onClose: () => void;
};

const TOAST_DURATION = 4

const ToastNotification: React.FC<ToastProps> = ({ message, type, position, onClose }) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
            const close = setTimeout(() => {
                onClose()
                clearTimeout(close)
            }, 1000)
        }, TOAST_DURATION * 1000);
        return () => clearTimeout(timer);
    }, [onClose]);

    const typeIcon = {
        success: <FaCheck size={18} className='text-green-500' />,
        error: <ImCross size={12} className='text-red-500' />,
        warning: <IoIosWarning size={20} className='text-yellow-500' />,
        info: <FaInfoCircle size={20} className='text-blue-500' />,
    }

    const typeBar = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        warning: 'bg-yellow-500',
        info: 'bg-blue-500',
    };

    const positionStyles = {
        'top-left': 'top-4 left-4',
        'top-right': 'top-4 right-4',
        'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
        'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2',
        'bottom-left': 'bottom-4 left-4',
        'bottom-right': 'bottom-4 right-4',
    };

    const positionAnimationInitial = {
        'top-left': {
            initial: {
                translateX: "-100%"
            },
            animate: {
                translateX: "0%"
            },
            exit: {
                translateX: "-100%"
            }
        },
        'top-right': {
            initial: {
                translateX: "100%"
            },
            animate: {
                translateX: "0%"
            },
            exit: {
                translateX: "100%"
            }
        },
        'top-center': {
            initial: {
                translateY: "-100%",
                translateX: "-50%"
            },
            animate: {
                translateY: "0%",
                translateX: "-50%"
            },
            exit: {
                translateY: "-100%",
                translateX: "-50%"
            }
        },
        'bottom-center': {
            initial: {
                translateY: "100%",
                translateX: "-50%"
            },
            animate: {
                translateY: "0%",
                translateX: "-50%"
            },
            exit: {
                translateY: "100%",
                translateX: "-50%"
            }
        },
        'bottom-left': {
            initial: {
                translateX: "-100%"
            },
            animate: {
                translateX: "0%"
            },
            exit: {
                translateX: "-100%"
            }
        },
        'bottom-right': {
            initial: {
                translateX: "100%"
            },
            animate: {
                translateX: "0%"
            },
            exit: {
                translateX: "100%"
            }
        },
    };

    return (
        <AnimatePresence>
            {show && <motion.div
                className={`fixed z-50 p-4 rounded bg-white overflow-hidden text-gray-900 shadow-lg ${positionStyles[position]} transition-opacity duration-300 ease-in-out`}
                {...positionAnimationInitial[position]}
                transition={{
                    ease: "easeInOut",
                    duration: 0.2,
                }}
            >
                <div className="flex items-center">
                    {typeIcon[type]}
                    <p className='ml-2 flex-1'>{message}</p>
                    <button
                        onClick={() => {
                            setShow(false);
                            onClose();
                        }}
                        className="ml-4 text-lg font-bold"
                    >
                        &times;
                    </button>

                </div>
                <motion.div initial={{ width: "100%" }} animate={{ width: "0%" }} transition={{
                    ease: "linear",
                    duration: TOAST_DURATION,
                }} className={`${typeBar[type]} w-full h-1 absolute bottom-0 left-0`} />
            </motion.div>}
        </AnimatePresence>
    );
};

export default ToastNotification;
