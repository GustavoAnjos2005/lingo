import { Button } from "@/components/ui/button"

const ButtonsPage = () => {
    return (
        <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
            <Button>Default</Button>
            <Button variant="primary">Primeiro</Button>
            <Button variant="primaryOutline">Primeiro Outline</Button>
            <Button variant="secondary">Segundo</Button>
            <Button variant="secondaryOutline">Segundo Outline</Button>
            <Button variant="danger">Perigo</Button>
            <Button variant="dangerOutline">Perigo Outline</Button>
            <Button variant="super">Super</Button>
            <Button variant="superOutline">Super Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="sidebar">Sidebar</Button>
            <Button variant="sidebarOutline">Sidebar Outline</Button>
        </div>
    )
}

export default ButtonsPage