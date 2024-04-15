"use client"

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useHeartsModal } from "@/store/use-hearts-modal"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export const HeartsModal = () => {
    const router = useRouter()
    const [isClient, setIsClient] = useState(false)
    const { isOpen, close } = useHeartsModal()

    useEffect(() => setIsClient(true), [])

    const onClick = () => {
        close()
        router.push("/store")
    }

    if (!isClient) {
        return null
    }

    return (
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <div className="flex items-center w-full justify-center mb-5">
                        <Image src="/mascot_bad.svg" alt="Mascot" height={80} width={80}/>
                    </div>
                    <DialogTitle className="text-center font-bold text-2xl">
                        Você está sem corações!
                    </DialogTitle>
                    <DialogDescription className="text-center text-base">
                        Ganhe o Pro para vida ilimitada, ou consiga alguns pela a loja.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mb-4">
                    <div className="flex flex-col gap-y-4 w-full">
                        <Button variant="primary" className="w-full" size="lg" onClick={onClick}>
                            Ganhe corações ilimitados
                        </Button>
                        <Button variant="primaryOutline" className="w-full" size="lg" onClick={close}>
                            Não obrigado
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}