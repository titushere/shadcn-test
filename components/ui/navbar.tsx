import { Button } from "@/components/ui/button"
import ToolbarMenuBtns from "./toolbarMenuBtns";    

export default function Navbar(){
    return(
        <div className="bg-[#2a2633] h-12 justify-between flex items-center">
            <div>
                <ToolbarMenuBtns name={"File"} />
                <ToolbarMenuBtns name={"Window"} />
            </div>
            <div>
                <Button variant="outline" size="sm" className="ml-4 mt-2 bg-[#2a2633] text-[#fff] cursor-pointer">
                    Window
                </Button>
            </div>
        </div>
    );
}

