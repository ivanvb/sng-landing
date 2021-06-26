import { useMedia } from 'react-use';
import { useInView } from 'react-intersection-observer';

export function useSideAppear({ threshold, responsiveStaggerDirection } = {}) {
    const { ref, inView } = useInView({ threshold: threshold || 0.5, triggerOnce: true });
    const isSmall = useMedia('(max-width: 650px)');

    const containerVariants = {
        visible: {
            transition: {
                staggerChildren: isSmall ? 0.35 : 0,
                staggerDirection: responsiveStaggerDirection || 1,
            },
        },
        hidden: {},
    };

    const elementsVariants = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.8,
            },
        },
        hidden: (multiplier = -1) => ({
            opacity: 0,
            x: isSmall ? 0 : 200 * multiplier,
            y: isSmall ? 100 : 0,
        }),
    };

    return {
        ref,
        inView,
        containerVariants,
        elementsVariants,
        currentVariant: Object.keys(containerVariants)[inView ? 0 : 1],
    };
}
