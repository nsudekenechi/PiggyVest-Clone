import automatedSavings from "../../public/images/automatedSavings.avif"
import fixedSavings from "../../public/images/fixedSavings.avif"
import goalOrientedSavings from "../../public/images/goalOrientedSavings.avif"
import flexNaira_phone from "../../public/images/flexNaira_phone.avif"
import flexDollar_phone from "../../public/images/flexDollar_phone.avif"
import techPoint from "../../public/images/techpoint.png"
import theGuardian from "../../public/images/theGuardian.png"
import techCrunch from "../../public/images/techCrunch.png"
import pymnts from "../../public/images/pymnts.svg"
import fastcompany from "../../public/images/fastcompany.svg"
import cio from "../../public/images/cio.svg"
import safelock from "../../public/images/safelock.avif"
import targetsavings from "../../public/images/targetsavings.avif"
import flexnaira from "../../public/images/flexnaira.avif"
import investify from "../../public/images/investify.avif"
import piggybank from "../../public/images/piggybank-icon.png"
import safeLock from "../../public/images/safelock-icon.png"
import targetIcon from "../../public/images/targets-icon.png"
import flexNaira from "../../public/images/flex-naira-icon.png"
import flexDollar from "../../public/images/flex-dollar-icon.png"


export const landingPageLogos = [
    {
        images: [safelock, targetsavings],
        time: [1, 1.2]
    },
    {
        images: [investify, flexnaira],
        time: [1.4, 1.6]

    },
]
export const buildSavings = [
    {
        title: "Automated Savings",
        subtitle: "Build a dedicated savings faster on your terms, automatically or manually.",
        arrowText: "piggybank",
        textColor: "rgb(0, 51, 153)",
        backgroundColor: "#0f60d6",
        img: automatedSavings,
        hovered: false
    },
    {
        title: "Fixed Savings",
        subtitle: "Lock money away for a fixed diration withput having access to it until maturity. It's like having a custom fixed deposit.",
        arrowText: "safelock",
        textColor: "rgb(50, 150, 255)",
        backgroundColor: "#2295f2",
        img: fixedSavings,
        hovered: false
    },
    {
        title: "Goal-oriented Savings",
        subtitle: "Reach all your savings goals faster. Save towards multiple goals on your own or with a group.",
        arrowText: "Piggybank",
        textColor: "rgb(6, 155, 64)",
        backgroundColor: "#39c277",
        img: goalOrientedSavings,
        hovered: false
    },
    {
        title: "Flex Naira",
        subtitle: " Save, transfer, manage, organise, and withdraw your money at any time.",
        arrowText: "flex naira",
        textColor: "rgb(229, 40, 142)",
        backgroundColor: "#e5489b",
        img: flexNaira_phone,
        hovered: false
    },
    {
        title: "Flex Dollar",
        subtitle: "Save and grow your money in foreign currencies such as Dollars.",
        arrowText: "flex dollar",
        textColor: "rgb(12, 24, 37)",
        backgroundColor: "#0c1825",
        img: flexDollar_phone,
        hovered: false
    }
]

export const featuredLogos = [
    {
        logo: techPoint,
        href: "/"
    },
    {
        logo: theGuardian,
        href: "/"
    },
    {
        logo: techCrunch,
        href: "/"
    },
    {
        logo: pymnts,
        href: "/"
    },
    {
        logo: fastcompany,
        href: "/"
    },
    {
        logo: cio,
        href: "/"
    }
]

export const footerLinks = [
    {
        name: "Products",
        links: [
            { text: "Piggybank", url: "" },
            { text: "Invest", url: "" },
            { text: "Safelock", url: "" },
            { text: "Target Savings", url: "" },
            { text: "Flex Naira", url: "" },
            { text: "Flex Dollar", url: "" },
        ]
    },
    {
        name: "Company",
        links: [
            { text: "About", url: "" },
            { text: "FAQs", url: "" },
            { text: "Blog", url: "" },


        ]
    },
    {
        name: "Legal",
        links: [
            { text: "Terms", url: "" },
            { text: "Privacy", url: "" },
            { text: "Security", url: "" },
        ]
    }
]

export const saveNavs = [
    {
        img: piggybank,
        title: "Piggybank",
        subtitle: "Automated Savings",
        hover: "hover:text-[#0d60d8]"
    },
    {
        img: safeLock,
        title: "Safelock",
        subtitle: "Fixed Savings",
        hover: "hover:text-[#2295f2]"
    },
    {
        img: targetIcon,
        title: "Target Savings",
        subtitle: "Goal-oriented Savings",
        hover: "hover:text-[#10b259]"
    },
    {
        img: flexNaira,
        title: "Flex naira",
        subtitle: "Flexible Savings",
        hover: "hover:text-[#ea4fa2]"
    },
    {
        img: flexDollar,
        title: "Flex dollar",
        subtitle: "Dollar Savings",
        hover: "hover:text-[#000]"
    }

]