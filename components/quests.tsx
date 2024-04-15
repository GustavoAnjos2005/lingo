import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { quests } from "@/constants"
import { Progress } from "@/components/ui/progress"

type Props = {
    points: number
}

export const Quests = ({ points }: Props) => {
    return (
        <div className="border-2 rounded-xl p-4 space-y-4">
            <div className="flex items-center justify-between w-full space-y-2">
                <h3 className="font-bold text-lg">
                    Missões
                </h3>
                <Link href="/quests">
                    <Button size="sm" variant="primaryOutline">
                        Veja todos
                    </Button>
                </Link>
            </div>
            <ul className="w-full">
                    {quests.map((quests) => {
                        const progress = (points / quests.value) * 100

                        return (
                            <div key={quests.title} className="flex items-center w-full p-4 gap-x-3">
                                <Image src="/points.svg" alt="Points" height={40} width={40}/>
                                <div className="flex flex-col gap-y-2 w-full">
                                    <p className="text-neutral-700 text-xl font-bold">
                                    {quests.title}
                                    </p>
                                    <Progress value={progress} className="h-2"/>
                                </div>
                            </div>
                        )
                    })}
                </ul>
        </div>
    )
}