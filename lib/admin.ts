import { auth } from "@clerk/nextjs"

const adminIds = [
    "user_2egyYhriEVnr47H6BZtwom6Pa8D"
]

export const isAdmin = () => {
    const { userId } = auth()

    if (!userId) {
        return false
    }

    return adminIds.indexOf(userId) !== -1
}