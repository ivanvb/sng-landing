import React from 'react';
import { motion } from 'framer-motion';

const AudioWave = () => {
    function generateRandomWave() {
        const maxDuration = 0.6;
        const minDuration = 0.4;

        const maxDelay = 0;
        const minDelay = -2;

        return {
            duration: Math.random() * (maxDuration - minDuration) + minDuration,
            delay: Math.random() * (maxDelay - minDelay) + minDelay,
        };
    }
    return (
        <div className="h-20 mx-auto mb-3">
            <svg
                viewBox="0 0 201 129"
                fill="none"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    d="M74.579 49.8C74.579 46.5967 71.9869 44 68.7895 44C65.592 44 63 46.5967 63 49.8V78.8C63 82.0033 65.592 84.6 68.7895 84.6C71.9869 84.6 74.579 82.0033 74.579 78.8V49.8Z"
                    fill="#09ADB9"
                    animate={{ scaleY: 1.35 }}
                    transition={{ ...generateRandomWave(), yoyo: Infinity }}
                />
                <motion.path
                    d="M53.5789 41.8C53.5789 38.5967 50.9869 36 47.7895 36C44.592 36 42 38.5967 42 41.8V88.2C42 91.4032 44.592 94 47.7895 94C50.9869 94 53.5789 91.4032 53.5789 88.2V41.8Z"
                    fill="#09ADB9"
                    animate={{ scaleY: 1.35 }}
                    transition={{ ...generateRandomWave(), yoyo: Infinity }}
                />
                <motion.path
                    d="M159 39.3C159 35.8206 156.314 33 153 33C149.686 33 147 35.8206 147 39.3V89.7C147 93.1794 149.686 96 153 96C156.314 96 159 93.1794 159 89.7V39.3Z"
                    fill="#09ADB9"
                    animate={{ scaleY: 1.35 }}
                    transition={{ ...generateRandomWave(), yoyo: Infinity }}
                />
                <motion.path
                    d="M179.579 55.8C179.579 52.5967 176.987 50 173.789 50C170.592 50 168 52.5967 168 55.8V73.2C168 76.4033 170.592 79 173.789 79C176.987 79 179.579 76.4033 179.579 73.2V55.8Z"
                    fill="#09ADB9"
                    animate={{ scaleY: 1.35 }}
                    transition={{ ...generateRandomWave(), yoyo: Infinity }}
                />
                <motion.path
                    d="M200.579 64.8C200.579 61.5967 197.987 59 194.789 59C191.592 59 189 61.5967 189 64.8C189 68.0033 191.592 70.6 194.789 70.6C197.987 70.6 200.579 68.0033 200.579 64.8Z"
                    fill="#09ADB9"
                    animate={{ scaleY: 1.35 }}
                    transition={{ ...generateRandomWave(), yoyo: Infinity }}
                />
                <motion.path
                    d="M32.5789 64.8C32.5789 61.5967 29.9869 59 26.7895 59C23.592 59 21 61.5967 21 64.8C21 68.0033 23.592 70.6 26.7895 70.6C29.9869 70.6 32.5789 68.0033 32.5789 64.8Z"
                    fill="#09ADB9"
                    animate={{ scaleY: 1.35 }}
                    transition={{ ...generateRandomWave(), yoyo: Infinity }}
                />
                <motion.path
                    d="M11.5789 59.8C11.5789 56.5967 8.98691 54 5.78947 54C2.59204 54 0 56.5967 0 59.8V68.5C0 71.7033 2.59204 74.3 5.78947 74.3C8.98691 74.3 11.5789 71.7033 11.5789 68.5V59.8Z"
                    fill="#09ADB9"
                    animate={{ scaleY: 1.35 }}
                    transition={{ ...generateRandomWave(), yoyo: Infinity }}
                />
                <motion.path
                    d="M95.5789 19.8C95.5789 16.5967 92.9869 14 89.7895 14C86.592 14 84 16.5967 84 19.8V109.7C84 112.903 86.592 115.5 89.7895 115.5C92.9869 115.5 95.5789 112.903 95.5789 109.7V19.8Z"
                    fill="#09ADB9"
                    animate={{ scaleY: 0.7 }}
                    transition={{ ...generateRandomWave(), yoyo: Infinity }}
                />
                <motion.path
                    d="M138 5.16C138 2.31021 135.314 0 132 0C128.686 0 126 2.31021 126 5.16V123.84C126 126.69 128.686 129 132 129C135.314 129 138 126.69 138 123.84V5.16Z"
                    fill="#09ADB9"
                    animate={{ scaleY: 0.8 }}
                    transition={{ ...generateRandomWave(), yoyo: Infinity }}
                />
                <motion.path
                    d="M116.579 39.8C116.579 37.149 113.987 35 110.789 35C107.592 35 105 37.149 105 39.8V90.2C105 92.851 107.592 95 110.789 95C113.987 95 116.579 92.851 116.579 90.2V39.8Z"
                    fill="#09ADB9"
                    animate={{ scaleY: 1.35 }}
                    transition={{ ...generateRandomWave(), yoyo: Infinity }}
                />
            </svg>
        </div>
    );
};

export default AudioWave;
