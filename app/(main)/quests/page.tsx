import { FeedWrapper } from "@/components/feed-wrapper"
import { Promo } from "@/components/promo"
import { StickyWrapper } from "@/components/sticky-wrapper"
import { Progress } from "@/components/ui/progress"
import { UserProgress } from "@/components/user-progress"
import { quests } from "@/constants"
import { getUserSubscription, getUserProgress } from "@/db/queries"
import Image from "next/image"
import { redirect } from "next/navigation"

const QuestsPage = async () => {
    const userProgressData = getUserProgress()
    const userSubscriptionData = getUserSubscription()

    const [ userProgress, userSubscription ] = await Promise.all([ userProgressData, userSubscriptionData ])

    if (!userProgress || !userProgress.activeCourse) {
        redirect("/courses")
    }

    const isPro = !!userSubscription?.isActive

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
        <StickyWrapper>
            <UserProgress 
            activeCourse={userProgress.activeCourse}
            hearts={userProgress.hearts}
            points={userProgress.points}
            hasActiveSubscription={isPro}
            />
        {!isPro && (
          <Promo />
        )}
        </StickyWrapper>
        <FeedWrapper>
            <div className="w-full flex flex-col items-center">
                <Image src="/quests.svg" alt="Quests" height={90} width={90}/>
                <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
                    Missões
                </h1>
                <p className="text-muted-foreground text-center text-lg mb-6">
                    Complete missões para ganhar pontos.
                </p>
                <ul className="w-full">
                    {quests.map((quests) => {
                        const progress = (userProgress.points / quests.value) * 100

                        return (
                            <div key={quests.title} className="flex items-center w-full p-4 gap-x-4 border-t-2">
                                <Image src="/points.svg" alt="Points" height={60} width={60}/>
                                <div className="flex flex-col gap-y-2 w-full">
                                    <p className="text-neutral-700 text-xl font-bold">
                                    {quests.title}
                                    </p>
                                    <Progress value={progress} className="h-3"/>
                                </div>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </FeedWrapper>
    </div>
  )
}

export default QuestsPage