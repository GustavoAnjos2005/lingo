import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const Promo = () => {
    return (
        <div className="border-2 rounded-xl p-4 space-y-4">
            <div className="space-y-2">
                <div className="flex items-center gap-x-2">
                    <Image src="/unlimited.svg" alt="Pro" height={26} width={26}/>
                    <h3 className="font-bold text-lg">
                        Upgrade para o Pro
                    </h3>
                </div>
                <p className="text-muted-foreground">
                    Ganhe vida ilimitada e muito mais!
                </p>
            </div>
            <Button asChild variant="super" className="w-full" size="lg">
            <Link href="/shop">
                Upgrade!
            </Link>
            </Button>
        </div>
    )
}