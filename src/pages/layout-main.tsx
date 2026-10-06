import { Outlet } from "react-router";
import MainContent from "../core-components/main-content";
import LogoImage from "../assets/images/logo.svg?react"
import Icon from "../components/icon";


export default function LayoutMain() {
    return <>
        <MainContent>
            <div className="
                py-3 px-5 bg-gray-600
                rounded-br-xl
                absolute
                top-0
                left-0
            ">
                <Icon svg={LogoImage} />
            </div>
            <Outlet />
        </MainContent>
    </>
}