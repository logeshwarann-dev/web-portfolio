"use client";

import Marquee from "react-fast-marquee";
import KafkaLogo from "../../../public/logos/kafka.svg"
import KubernetesLogo from "../../../public/logos/kubernetes.svg";
import NextJSLogo from "../../../public/logos/nextjs.svg";

export type LogoMarqueeProps = { className?: string };
export default function LogoMarquee({ className }: Readonly<LogoMarqueeProps>) {
    return (
        <div className={className}>
            <Marquee direction="left" gradient speed={40} gradientWidth={48}>
                <KafkaLogo className="h-10 px-2 mx-6" />
                <KubernetesLogo className="h-10 px-2 mx-6" />
                <NextJSLogo className="h-10 px-2 mx-6" />
            </Marquee>
        </div>
    );
}
