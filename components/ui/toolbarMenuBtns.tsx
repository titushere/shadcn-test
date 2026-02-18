import { Button } from "@/components/ui/button"

export default function ToolbarMenuBtns({ name }: { name: string }) {
  return (
    <Button variant="outline" size="sm" className="ml-4 mt-2 bg-[#2a2633] text-[#fff] cursor-pointer">
        {name}
    </Button>
  );
}
