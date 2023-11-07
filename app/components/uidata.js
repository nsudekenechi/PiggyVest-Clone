import automatedSavings from "../../public/images/automatedSavings.avif"
import fixedSavings from "../../public/images/fixedSavings.avif"
import goalOrientedSavings from "../../public/images/goalOrientedSavings.avif"
import flexNaira_phone from "../../public/images/flexNaira_phone.avif"
import flexDollar_phone from "../../public/images/flexDollar_phone.avif"
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