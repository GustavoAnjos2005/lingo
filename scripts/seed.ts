import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

import * as schema from "@/db/schema"

const sql = neon(process.env.DATABASE_URL!)
// @ts-ignore
const db = drizzle(sql, { schema })

const main = async () => {
    try {
        console.log("Seeding database")

        await db.delete(schema.courses)
        await db.delete(schema.userProgress)
        await db.delete(schema.units)
        await db.delete(schema.lessons)
        await db.delete(schema.challenges)
        await db.delete(schema.challengeOptions)
        await db.delete(schema.challengeProgress)
        await db.delete(schema.userSubscription)

        await db.insert(schema.courses).values([ //CAMPO CURSO
            {
                id: 1,
                title: "Espanha", //curso
                imageSrc: "/es.svg",
            },
            {
                id: 2,
                title: "Itália", //curso
                imageSrc: "/it.svg",
            },
            {
                id: 3,
                title: "França", //curso
                imageSrc: "/fr.svg",
            },
            {
                id: 4,
                title: "Croácia", //curso
                imageSrc: "/hr.svg",
            },
            {
                id: 5,
                title: "Japão", //curso
                imageSrc: "/jp.svg",
            },
        ])

        await db.insert(schema.units).values([ //CAMPO UNIDADE
            {
                id: 1, //unidade 1
                courseId: 1, //Espanha
                title: "Unidade 1",
                description: "Aprenda o básico da Espanha",
                order: 1
            },
            {
                id: 2, //unidade 2
                courseId: 1, //Espanha
                title: "Unidade 2",
                description: "Aprenda o intermediário da Espanha",
                order: 2
            },
            {
                id: 3, //unidade 1
                courseId: 2, //Itália
                title: "Unidade 1",
                description: "Aprenda o básico da Itália",
                order: 3
            },
            {
                id: 4, //unidade 2
                courseId: 2, //Itália
                title: "Unidade 2",
                description: "Aprenda o intermediário da Itália",
                order: 4
            },
            {
                id: 5, //unidade 1
                courseId: 3, //França
                title: "Unidade 1",
                description: "Aprenda o básico da França",
                order: 5
            },
            {
                id: 6, //unidade 2
                courseId: 3, //França
                title: "Unidade 2",
                description: "Aprenda o intermediário da França",
                order: 6
            },
            {
                id: 7, //unidade 1
                courseId: 4, //Croácia
                title: "Unidade 1",
                description: "Aprenda o básico da Croácia",
                order: 7
            },
            {
                id: 8, //unidade 2
                courseId: 4, //Croácia
                title: "Unidade 2",
                description: "Aprenda o intermediário da Croácia",
                order: 8
            },
            {
                id: 9, //unidade 1
                courseId: 5, //Japão
                title: "Unidade 1",
                description: "Aprenda o básico do Japão",
                order: 9
            },
            {
                id: 10, //unidade 2
                courseId: 5, //Japão
                title: "Unidade 2",
                description: "Aprenda o intermediário do Japão",
                order: 10
            },
        ])

        await db.insert(schema.lessons).values([ //CAMPO LIÇÃO
            {
                id: 1,
                unitId: 1,
                order: 1,
                title: "Substantivos"
            },
            {
                id: 2,
                unitId: 1,
                order: 2,
                title: "Verbos"
            },
            {
                id: 3,
                unitId: 1,
                order: 3,
                title: "Vocabolário"
            },
            {
                id: 4,
                unitId: 2,
                order: 4,
                title: "Substantivos"
            },
            {
                id: 5,
                unitId: 2,
                order: 5,
                title: "Verbos"
            },
            {
                id: 6,
                unitId: 2,
                order: 6,
                title: "Vocabolário"
            },
            {
                id: 7,
                unitId: 3,
                order: 7,
                title: "Substantivos"
            },
            {
                id: 8,
                unitId: 3,
                order: 8,
                title: "Verbos"
            },
            {
                id: 9,
                unitId: 3,
                order: 9,
                title: "Vocabolário"
            },
            {
                id: 10,
                unitId: 4,
                order: 10,
                title: "Substantivos"
            },
            {
                id: 11,
                unitId: 4,
                order: 11,
                title: "Verbos"
            },
            {
                id: 12,
                unitId: 4,
                order: 12,
                title: "Vocabolário"
            },
            {
                id: 13,
                unitId: 5,
                order: 13,
                title: "Substantivos"
            },
            {
                id: 14,
                unitId: 5,
                order: 14,
                title: "Verbos"
            },
            {
                id: 15,
                unitId: 5,
                order: 15,
                title: "Vocabolário"
            },
            {
                id: 16,
                unitId: 6,
                order: 16,
                title: "Substantivos"
            },
            {
                id: 17,
                unitId: 6,
                order: 17,
                title: "Verbos"
            },
            {
                id: 18,
                unitId: 6,
                order: 18,
                title: "Vocabolário"
            },
            {
                id: 19,
                unitId: 7,
                order: 19,
                title: "Substantivos"
            },
            {
                id: 20,
                unitId: 7,
                order: 20,
                title: "Verbos"
            },
            {
                id: 21,
                unitId: 7,
                order: 21,
                title: "Vocabolário"
            },
            {
                id: 22,
                unitId: 8,
                order: 22,
                title: "Substantivos"
            },
            {
                id: 23,
                unitId: 8,
                order: 23,
                title: "Verbos"
            },
            {
                id: 24,
                unitId: 8,
                order: 24,
                title: "Vocabolário"
            },
            {
                id: 25,
                unitId: 9,
                order: 25,
                title: "Substantivos"
            },
            {
                id: 26,
                unitId: 9,
                order: 26,
                title: "Verbos"
            },
            {
                id: 27,
                unitId: 9,
                order: 27,
                title: "Vocabolário"
            },
            {
                id: 28,
                unitId: 10,
                order: 28,
                title: "Substantivos"
            },
            {
                id: 29,
                unitId: 10,
                order: 29,
                title: "Verbos"
            },
            {
                id: 30,
                unitId: 10,
                order: 30,
                title: "Vocabolário"
            },
        ])

        await db.insert(schema.challenges).values([ //CAMPO DESAFIO
            {
                id: 1,
                lessonId: 1,
                type: "SELECT",
                order: 1,
                question: 'Qual desses é a sentença correta para "o homem"?',
            },
            {
                id: 2,
                lessonId: 1,
                type: "ASSIST",
                order: 2,
                question: '"o homem"?',
            },
            {
                id: 3,
                lessonId: 1,
                type: "SELECT",
                order: 3,
                question: 'Qual desses é a sentença correta para "o robô"?',
            },
            {
                id: 4,
                lessonId: 2,
                type: "SELECT",
                order: 4,
                question: 'Qual desses é a sentença correta para "o menino"?',
            },
            {
                id: 5,
                lessonId: 2,
                type: "ASSIST",
                order: 5,
                question: '"o zumbi"?',
            },
            {
                id: 6,
                lessonId: 2,
                type: "SELECT",
                order: 6,
                question: 'Qual desses é a sentença correta para "a garota"?',
            },
            {
                id: 7,
                lessonId: 3,
                type: "ASSIST",
                order: 7,
                question: '"o abacaxi"?',
            },
            {
                id: 8,
                lessonId: 3,
                type: "ASSIST",
                order: 8,
                question: '"a maça"?',
            },
            {
                id: 9,
                lessonId: 3,
                type: "ASSIST",
                order: 9,
                question: '"o morango"?',
            },
            {
                id: 10,
                lessonId: 4,
                type: "ASSIST",
                order: 10,
                question: 'Qual desses é a sentença correta para "o menino comeu a maça"?',
            },
            {
                id: 11,
                lessonId: 4,
                type: "ASSIST",
                order: 11,
                question: 'Qual desses é a sentença correta para "a garota comeu o morango"?',
            },
            {
                id: 12,
                lessonId: 4,
                type: "ASSIST",
                order: 12,
                question: 'Qual desses é a sentença correta para "o homem comeu o morango"?',
            },
            {
                id: 13,
                lessonId: 5,
                type: "ASSIST",
                order: 13,
                question: 'Qual desses é a sentença correta para "o homem chorou"?',
            },
            {
                id: 14,
                lessonId: 5,
                type: "ASSIST",
                order: 14,
                question: 'Qual desses é a sentença correta para "a garota sorriu"?',
            },
            {
                id: 15,
                lessonId: 5,
                type: "ASSIST",
                order: 15,
                question: 'Qual desses é a sentença correta para "o robô quebrou"?',
            },
            {
                id: 16,
                lessonId: 6,
                type: "ASSIST",
                order: 16,
                question: 'Qual desses é a sentença correta para "o zumbi é feio"?',
            },
            {
                id: 17,
                lessonId: 6,
                type: "ASSIST",
                order: 17,
                question: 'Qual desses é a sentença correta para "a mulher é linda"?',
            },
            {
                id: 18,
                lessonId: 6,
                type: "ASSIST",
                order: 18,
                question: 'Qual desses é a sentença correta para "o robô é muito útil"?',
            },
            {
                id: 19,
                lessonId: 7,
                type: "SELECT",
                order: 19,
                question: 'Qual desses é a sentença correta para "o homem"?',
            },
            {
                id: 20,
                lessonId: 7,
                type: "ASSIST",
                order: 20,
                question: '"o homem"?',
            },
            {
                id: 21,
                lessonId: 7,
                type: "SELECT",
                order: 21,
                question: 'Qual desses é a sentença correta para "o robô"?',
            },
            {
                id: 22,
                lessonId: 8,
                type: "SELECT",
                order: 22,
                question: 'Qual desses é a sentença correta para "o menino"?',
            },
            {
                id: 23,
                lessonId: 8,
                type: "ASSIST",
                order: 23,
                question: '"o zumbi"?',
            },
            {
                id: 24,
                lessonId: 8,
                type: "SELECT",
                order: 24,
                question: 'Qual desses é a sentença correta para "a garota"?',
            },
            {
                id: 25,
                lessonId: 9,
                type: "ASSIST",
                order: 25,
                question: '"o abacaxi"?',
            },
            {
                id: 26,
                lessonId: 9,
                type: "ASSIST",
                order: 26,
                question: '"a maça"?',
            },
            {
                id: 27,
                lessonId: 9,
                type: "ASSIST",
                order: 27,
                question: '"o morango"?',
            },
            {
                id: 28,
                lessonId: 10,
                type: "ASSIST",
                order: 28,
                question: 'Qual desses é a sentença correta para "o menino comeu a maça"?',
            },
            {
                id: 29,
                lessonId: 10,
                type: "ASSIST",
                order: 29,
                question: 'Qual desses é a sentença correta para "a garota comeu o morango"?',
            },
            {
                id: 30,
                lessonId: 10,
                type: "ASSIST",
                order: 30,
                question: 'Qual desses é a sentença correta para "o homem comeu o morango"?',
            },
            {
                id: 31,
                lessonId: 11,
                type: "ASSIST",
                order: 31,
                question: 'Qual desses é a sentença correta para "o homem chorou"?',
            },
            {
                id: 32,
                lessonId: 11,
                type: "ASSIST",
                order: 32,
                question: 'Qual desses é a sentença correta para "a garota sorriu"?',
            },
            {
                id: 33,
                lessonId: 11,
                type: "ASSIST",
                order: 33,
                question: 'Qual desses é a sentença correta para "o robô quebrou"?',
            },
            {
                id: 34,
                lessonId: 12,
                type: "ASSIST",
                order: 34,
                question: 'Qual desses é a sentença correta para "o zumbi é feio"?',
            },
            {
                id: 35,
                lessonId: 12,
                type: "ASSIST",
                order: 35,
                question: 'Qual desses é a sentença correta para "a mulher é linda"?',
            },
            {
                id: 36,
                lessonId: 12,
                type: "ASSIST",
                order: 36,
                question: 'Qual desses é a sentença correta para "o robô é muito útil"?',
            },
            {
                id: 37,
                lessonId: 13,
                type: "SELECT",
                order: 37,
                question: 'Qual desses é a sentença correta para "o homem"?',
            },
            {
                id: 38,
                lessonId: 13,
                type: "ASSIST",
                order: 38,
                question: '"o homem"?',
            },
            {
                id: 39,
                lessonId: 13,
                type: "SELECT",
                order: 39,
                question: 'Qual desses é a sentença correta para "o robô"?',
            },
            {
                id: 40,
                lessonId: 14,
                type: "SELECT",
                order: 40,
                question: 'Qual desses é a sentença correta para "o menino"?',
            },
            {
                id: 41,
                lessonId: 14,
                type: "ASSIST",
                order: 41,
                question: '"o zumbi"?',
            },
            {
                id: 42,
                lessonId: 14,
                type: "SELECT",
                order: 42,
                question: 'Qual desses é a sentença correta para "a garota"?',
            },
            {
                id: 43,
                lessonId: 15,
                type: "ASSIST",
                order: 43,
                question: '"o abacaxi"?',
            },
            {
                id: 44,
                lessonId: 15,
                type: "ASSIST",
                order: 44,
                question: '"a maça"?',
            },
            {
                id: 45,
                lessonId: 15,
                type: "ASSIST",
                order: 45,
                question: '"o morango"?',
            },
            {
                id: 46,
                lessonId: 16,
                type: "ASSIST",
                order: 46,
                question: 'Qual desses é a sentença correta para "o menino comeu a maça"?',
            },
            {
                id: 47,
                lessonId: 16,
                type: "ASSIST",
                order: 47,
                question: 'Qual desses é a sentença correta para "a garota comeu o morango"?',
            },
            {
                id: 48,
                lessonId: 16,
                type: "ASSIST",
                order: 48,
                question: 'Qual desses é a sentença correta para "o homem comeu o morango"?',
            },
            {
                id: 49,
                lessonId: 17,
                type: "ASSIST",
                order: 49,
                question: 'Qual desses é a sentença correta para "o homem chorou"?',
            },
            {
                id: 50,
                lessonId: 17,
                type: "ASSIST",
                order: 50,
                question: 'Qual desses é a sentença correta para "a garota sorriu"?',
            },
            {
                id: 51,
                lessonId: 17,
                type: "ASSIST",
                order: 51,
                question: 'Qual desses é a sentença correta para "o robô quebrou"?',
            },
            {
                id: 52,
                lessonId: 18,
                type: "ASSIST",
                order: 52,
                question: 'Qual desses é a sentença correta para "o zumbi é feio"?',
            },
            {
                id: 53,
                lessonId: 18,
                type: "ASSIST",
                order: 53,
                question: 'Qual desses é a sentença correta para "a mulher é linda"?',
            },
            {
                id: 54,
                lessonId: 18,
                type: "ASSIST",
                order: 54,
                question: 'Qual desses é a sentença correta para "o robô é muito útil"?',
            },
            {
                id: 55,
                lessonId: 19,
                type: "SELECT",
                order: 55,
                question: 'Qual desses é a sentença correta para "o homem"?',
            },
            {
                id: 56,
                lessonId: 19,
                type: "ASSIST",
                order: 56,
                question: '"o homem"?',
            },
            {
                id: 57,
                lessonId: 19,
                type: "SELECT",
                order: 57,
                question: 'Qual desses é a sentença correta para "o robô"?',
            },
            {
                id: 58,
                lessonId: 20,
                type: "SELECT",
                order: 58,
                question: 'Qual desses é a sentença correta para "o menino"?',
            },
            {
                id: 59,
                lessonId: 20,
                type: "ASSIST",
                order: 59,
                question: '"o zumbi"?',
            },
            {
                id: 60,
                lessonId: 20,
                type: "SELECT",
                order: 60,
                question: 'Qual desses é a sentença correta para "a garota"?',
            },
            {
                id: 61,
                lessonId: 21,
                type: "ASSIST",
                order: 61,
                question: '"o abacaxi"?',
            },
            {
                id: 62,
                lessonId: 21,
                type: "ASSIST",
                order: 62,
                question: '"a maça"?',
            },
            {
                id: 63,
                lessonId: 21,
                type: "ASSIST",
                order: 63,
                question: '"o morango"?',
            },
            {
                id: 64,
                lessonId: 22,
                type: "ASSIST",
                order: 64,
                question: 'Qual desses é a sentença correta para "o menino comeu a maça"?',
            },
            {
                id: 65,
                lessonId: 22,
                type: "ASSIST",
                order: 65,
                question: 'Qual desses é a sentença correta para "a garota comeu o morango"?',
            },
            {
                id: 66,
                lessonId: 22,
                type: "ASSIST",
                order: 66,
                question: 'Qual desses é a sentença correta para "o homem comeu o morango"?',
            },
            {
                id: 67,
                lessonId: 23,
                type: "ASSIST",
                order: 67,
                question: 'Qual desses é a sentença correta para "o homem chorou"?',
            },
            {
                id: 68,
                lessonId: 23,
                type: "ASSIST",
                order: 68,
                question: 'Qual desses é a sentença correta para "a garota sorriu"?',
            },
            {
                id: 69,
                lessonId: 23,
                type: "ASSIST",
                order: 69,
                question: 'Qual desses é a sentença correta para "o robô quebrou"?',
            },
            {
                id: 70,
                lessonId: 24,
                type: "ASSIST",
                order: 70,
                question: 'Qual desses é a sentença correta para "o zumbi é feio"?',
            },
            {
                id: 71,
                lessonId: 24,
                type: "ASSIST",
                order: 71,
                question: 'Qual desses é a sentença correta para "a mulher é linda"?',
            },
            {
                id: 72,
                lessonId: 24,
                type: "ASSIST",
                order: 72,
                question: 'Qual desses é a sentença correta para "o robô é muito útil"?',
            },
            {
                id: 73,
                lessonId: 25,
                type: "SELECT",
                order: 73,
                question: 'Qual desses é a sentença correta para "o homem"?',
            },
            {
                id: 74,
                lessonId: 25,
                type: "ASSIST",
                order: 74,
                question: '"o homem"?',
            },
            {
                id: 75,
                lessonId: 25,
                type: "SELECT",
                order: 75,
                question: 'Qual desses é a sentença correta para "o robô"?',
            },
            {
                id: 76,
                lessonId: 26,
                type: "SELECT",
                order: 76,
                question: 'Qual desses é a sentença correta para "o menino"?',
            },
            {
                id: 77,
                lessonId: 26,
                type: "ASSIST",
                order: 77,
                question: '"o zumbi"?',
            },
            {
                id: 78,
                lessonId: 26,
                type: "SELECT",
                order: 78,
                question: 'Qual desses é a sentença correta para "a garota"?',
            },
            {
                id: 79,
                lessonId: 27,
                type: "ASSIST",
                order: 79,
                question: '"o abacaxi"?',
            },
            {
                id: 80,
                lessonId: 27,
                type: "ASSIST",
                order: 80,
                question: '"a maça"?',
            },
            {
                id: 81,
                lessonId: 27,
                type: "ASSIST",
                order: 81,
                question: '"o morango"?',
            },
            {
                id: 82,
                lessonId: 28,
                type: "ASSIST",
                order: 82,
                question: 'Qual desses é a sentença correta para "o menino comeu a maça"?',
            },
            {
                id: 83,
                lessonId: 28,
                type: "ASSIST",
                order: 83,
                question: 'Qual desses é a sentença correta para "a garota comeu o morango"?',
            },
            {
                id: 84,
                lessonId: 28,
                type: "ASSIST",
                order: 84,
                question: 'Qual desses é a sentença correta para "o homem comeu o morango"?',
            },
            {
                id: 85,
                lessonId: 29,
                type: "ASSIST",
                order: 85,
                question: 'Qual desses é a sentença correta para "o homem chorou"?',
            },
            {
                id: 86,
                lessonId: 29,
                type: "ASSIST",
                order: 86,
                question: 'Qual desses é a sentença correta para "a garota sorriu"?',
            },
            {
                id: 87,
                lessonId: 29,
                type: "ASSIST",
                order: 87,
                question: 'Qual desses é a sentença correta para "o robô quebrou"?',
            },
            {
                id: 88,
                lessonId: 30,
                type: "ASSIST",
                order: 88,
                question: 'Qual desses é a sentença correta para "o zumbi é feio"?',
            },
            {
                id: 89,
                lessonId: 30,
                type: "ASSIST",
                order: 89,
                question: 'Qual desses é a sentença correta para "a mulher é linda"?',
            },
            {
                id: 90,
                lessonId: 30,
                type: "ASSIST",
                order: 90,
                question: 'Qual desses é a sentença correta para "o robô é muito útil"?',
            },
        ])

        await db.insert(schema.challengeOptions).values([ //OPÇÕES DO DESAFIO
            {
                challengeId: 1,
                imageSrc: "/man.svg",
                correct: true,
                text: "el hombre",
                audioSrc: "/es_man.mp3"
            },
            {
                challengeId: 1,
                imageSrc: "/woman.svg",
                correct: false,
                text: "la mujer",
                audioSrc: "/es_woman.mp3"
            },
            {
                challengeId: 1,
                imageSrc: "/robot.svg",
                correct: false,
                text: "el robot",
                audioSrc: "/es_robot.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 2,
                correct: true,
                text: "el hombre",
                audioSrc: "/es_man.mp3"
            },
            {
                challengeId: 2,
                correct: false,
                text: "la mujer",
                audioSrc: "/es_woman.mp3"
            },
            {
                challengeId: 2,
                correct: false,
                text: "el robot",
                audioSrc: "/es_robot.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 3,
                imageSrc: "/man.svg",
                correct: false,
                text: "el hombre",
                audioSrc: "/es_man.mp3"
            },
            {
                challengeId: 3,
                imageSrc: "/woman.svg",
                correct: false,
                text: "la mujer",
                audioSrc: "/es_woman.mp3"
            },
            {
                challengeId: 3,
                imageSrc: "/robot.svg",
                correct: true,
                text: "el robot",
                audioSrc: "/es_robot.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 4,
                correct: true,
                text: "el chico",
                audioSrc: "/es_boy.mp3",
                imageSrc: "boy.svg"
            },
            {
                challengeId: 4,
                correct: false,
                text: "la niña",
                audioSrc: "/es_girl.mp3",
                imageSrc: "girl.svg"
            },
            {
                challengeId: 4,
                correct: false,
                text: "el zombie",
                audioSrc: "/es_zombie.mp3",
                imageSrc: "zombie.svg"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 5,
                correct: false,
                text: "el chico",
                audioSrc: "/es_boy.mp3"
            },
            {
                challengeId: 5,
                correct: false,
                text: "la niña",
                audioSrc: "/es_girl.mp3"
            },
            {
                challengeId: 5,
                correct: true,
                text: "el zombie",
                audioSrc: "/es_zombie.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 6,
                correct: false,
                text: "el chico",
                audioSrc: "/es_boy.mp3",
                imageSrc: "boy.svg"
            },
            {
                challengeId: 6,
                correct: true,
                text: "la niña",
                audioSrc: "/es_girl.mp3",
                imageSrc: "girl.svg"
            },
            {
                challengeId: 6,
                correct: false,
                text: "el zombie",
                audioSrc: "/es_zombie.mp3",
                imageSrc: "zombie.svg"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 7,
                correct: false,
                text: "la fresa",
                audioSrc: "/es_fresa.mp3"
            },
            {
                challengeId: 7,
                correct: true,
                text: "la piña",
                audioSrc: "/es_pina.mp3"
            },
            {
                challengeId: 7,
                correct: false,
                text: "la manzana",
                audioSrc: "/es_manzana.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 8,
                correct: false,
                text: "la fresa",
                audioSrc: "/es_fresa.mp3"
            },
            {
                challengeId: 8,
                correct: false,
                text: "la piña",
                audioSrc: "/es_pina.mp3"
            },
            {
                challengeId: 8,
                correct: true,
                text: "la manzana",
                audioSrc: "/es_manzana.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 9,
                correct: true,
                text: "la fresa",
                audioSrc: "/es_fresa.mp3"
            },
            {
                challengeId: 9,
                correct: false,
                text: "la piña",
                audioSrc: "/es_pina.mp3"
            },
            {
                challengeId: 9,
                correct: false,
                text: "la manzana",
                audioSrc: "/es_manzana.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 10,
                correct: false,
                text: "la chica se comió la fresca",
                audioSrc: "/es_chica_fresca.mp3"
            },
            {
                challengeId: 10,
                correct: false,
                text: "el hombre se comió la fresa",
                audioSrc: "/es_hombre_fresca.mp3"
            },
            {
                challengeId: 10,
                correct: true,
                text: "el niño se comió la manzana",
                audioSrc: "/es_nino_manzana.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 11,
                correct: true,
                text: "la chica se comió la fresca",
                audioSrc: "/es_chica_fresca.mp3"
            },
            {
                challengeId: 11,
                correct: false,
                text: "el hombre se comió la fresa",
                audioSrc: "/es_hombre_fresca.mp3"
            },
            {
                challengeId: 11,
                correct: false,
                text: "el niño se comió la manzana",
                audioSrc: "/es_nino_manzana.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 12,
                correct: false,
                text: "la chica se comió la fresca",
                audioSrc: "/es_chica_fresca.mp3"
            },
            {
                challengeId: 12,
                correct: true,
                text: "el hombre se comió la fresa",
                audioSrc: "/es_hombre_fresca.mp3"
            },
            {
                challengeId: 12,
                correct: false,
                text: "el niño se comió la manzana",
                audioSrc: "/es_nino_manzana.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 13,
                correct: false,
                text: "la chica sonrió",
                audioSrc: "/es_chica_sonrio.mp3"
            },
            {
                challengeId: 13,
                correct: true,
                text: "el hombre lloró",
                audioSrc: "/es_hombre_lloro.mp3"
            },
            {
                challengeId: 13,
                correct: false,
                text: "el robot se rompió",
                audioSrc: "/es_robot_rompio.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 14,
                correct: true,
                text: "la chica sonrió",
                audioSrc: "/es_chica_sonrio.mp3"
            },
            {
                challengeId: 14,
                correct: false,
                text: "el hombre lloró",
                audioSrc: "/es_hombre_lloro.mp3"
            },
            {
                challengeId: 14,
                correct: false,
                text: "el robot se rompió",
                audioSrc: "/es_robot_rompio.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 15,
                correct: false,
                text: "la chica sonrió",
                audioSrc: "/es_chica_sonrio.mp3"
            },
            {
                challengeId: 15,
                correct: false,
                text: "el hombre lloró",
                audioSrc: "/es_hombre_lloro.mp3"
            },
            {
                challengeId: 15,
                correct: true,
                text: "el robot se rompió",
                audioSrc: "/es_robot_rompio.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 16,
                correct: false,
                text: "la mujer es hermosa",
                audioSrc: "/es_mujer_hermosa.mp3"
            },
            {
                challengeId: 16,
                correct: true,
                text: "el zombie es feo",
                audioSrc: "/es_zombie_feo.mp3"
            },
            {
                challengeId: 16,
                correct: false,
                text: "el robot es muy util",
                audioSrc: "/es_robot_util.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 17,
                correct: true,
                text: "la mujer es hermosa",
                audioSrc: "/es_mujer_hermosa.mp3"
            },
            {
                challengeId: 17,
                correct: false,
                text: "el zombie es feo",
                audioSrc: "/es_zombie_feo.mp3"
            },
            {
                challengeId: 17,
                correct: false,
                text: "el robot es muy util",
                audioSrc: "/es_robot_util.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 18,
                correct: false,
                text: "la mujer es hermosa",
                audioSrc: "/es_mujer_hermosa.mp3"
            },
            {
                challengeId: 18,
                correct: false,
                text: "el zombie es feo",
                audioSrc: "/es_zombie_feo.mp3"
            },
            {
                challengeId: 18,
                correct: true,
                text: "el robot es muy util",
                audioSrc: "/es_robot_util.mp3"
            },
        ])

         await db.insert(schema.challengeOptions).values([
            {
                challengeId: 19,
                imageSrc: "/man.svg",
                correct: true,
                text: "l'uomo",
                audioSrc: "/it_man.mp3"
            },
            {
                challengeId: 19,
                imageSrc: "/woman.svg",
                correct: false,
                text: "la donna",
                audioSrc: "/it_woman.mp3"
            },
            {
                challengeId: 19,
                imageSrc: "/robot.svg",
                correct: false,
                text: "il robot",
                audioSrc: "/it_robot.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 20,
                correct: true,
                text: "l'uomo",
                audioSrc: "/it_man.mp3"
            },
            {
                challengeId: 20,
                correct: false,
                text: "la donna",
                audioSrc: "/it_woman.mp3"
            },
            {
                challengeId: 20,
                correct: false,
                text: "il robot",
                audioSrc: "/it_robot.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 21,
                imageSrc: "/man.svg",
                correct: false,
                text: "l'uomo",
                audioSrc: "/it_man.mp3"
            },
            {
                challengeId: 21,
                imageSrc: "/woman.svg",
                correct: false,
                text: "la donna",
                audioSrc: "/it_woman.mp3"
            },
            {
                challengeId: 21,
                imageSrc: "/robot.svg",
                correct: true,
                text: "il robot",
                audioSrc: "/it_robot.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 22,
                correct: true,
                text: "il ragazzo",
                audioSrc: "/it_boy.mp3",
                imageSrc: "boy.svg"
            },
            {
                challengeId: 22,
                correct: false,
                text: "la ragazza",
                audioSrc: "/it_girl.mp3",
                imageSrc: "girl.svg"
            },
            {
                challengeId: 22,
                correct: false,
                text: "lo zombie",
                audioSrc: "/it_zombie.mp3",
                imageSrc: "zombie.svg"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 23,
                correct: false,
                text: "il ragazzo",
                audioSrc: "/it_boy.mp3"
            },
            {
                challengeId: 23,
                correct: false,
                text: "la ragazza",
                audioSrc: "/it_girl.mp3"
            },
            {
                challengeId: 23,
                correct: true,
                text: "lo zombie",
                audioSrc: "/it_zombie.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 24,
                correct: false,
                text: "il ragazzo",
                audioSrc: "/it_boy.mp3",
                imageSrc: "boy.svg"
            },
            {
                challengeId: 24,
                correct: true,
                text: "la ragazza",
                audioSrc: "/it_girl.mp3",
                imageSrc: "girl.svg"
            },
            {
                challengeId: 24,
                correct: false,
                text: "lo zombie",
                audioSrc: "/it_zombie.mp3",
                imageSrc: "zombie.svg"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 25,
                correct: false,
                text: "la fragola",
                audioSrc: "/it_fresa.mp3"
            },
            {
                challengeId: 25,
                correct: true,
                text: "l'ananas",
                audioSrc: "/it_pina.mp3"
            },
            {
                challengeId: 25,
                correct: false,
                text: "la mela",
                audioSrc: "/it_manzana.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 26,
                correct: false,
                text: "la fragola",
                audioSrc: "/it_fresa.mp3"
            },
            {
                challengeId: 26,
                correct: false,
                text: "l'ananas",
                audioSrc: "/it_pina.mp3"
            },
            {
                challengeId: 26,
                correct: true,
                text: "la mela",
                audioSrc: "/it_manzana.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 27,
                correct: true,
                text: "la fragola",
                audioSrc: "/it_fresa.mp3"
            },
            {
                challengeId: 27,
                correct: false,
                text: "l'ananas",
                audioSrc: "/it_pina.mp3"
            },
            {
                challengeId: 27,
                correct: false,
                text: "la mela",
                audioSrc: "/it_manzana.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 28,
                correct: false,
                text: "la ragazza ha mangiato la fragola",
                audioSrc: "/it_chica_fresca.mp3"
            },
            {
                challengeId: 28,
                correct: false,
                text: "l'uomo ha mangiato la fragola",
                audioSrc: "/it_hombre_fresca.mp3"
            },
            {
                challengeId: 28,
                correct: true,
                text: "il ragazzo ha mangiato la mela",
                audioSrc: "/it_nino_manzana.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 29,
                correct: true,
                text: "la ragazza ha mangiato la fragola",
                audioSrc: "/it_chica_fresca.mp3"
            },
            {
                challengeId: 29,
                correct: false,
                text: "l'uomo ha mangiato la fragola",
                audioSrc: "/it_hombre_fresca.mp3"
            },
            {
                challengeId: 29,
                correct: false,
                text: "il ragazzo ha mangiato la mela",
                audioSrc: "/it_nino_manzana.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 30,
                correct: false,
                text: "la ragazza ha mangiato la fragola",
                audioSrc: "/it_chica_fresca.mp3"
            },
            {
                challengeId: 30,
                correct: true,
                text: "l'uomo ha mangiato la fragola",
                audioSrc: "/it_hombre_fresca.mp3"
            },
            {
                challengeId: 30,
                correct: false,
                text: "il ragazzo ha mangiato la mela",
                audioSrc: "/it_nino_manzana.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 31,
                correct: false,
                text: "la ragazza sorrise",
                audioSrc: "/it_chica_sonrio.mp3"
            },
            {
                challengeId: 31,
                correct: true,
                text: "gridò l'uomo",
                audioSrc: "/it_hombre_lloro.mp3"
            },
            {
                challengeId: 31,
                correct: false,
                text: "il robot si è rotto",
                audioSrc: "/it_robot_rompio.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 32,
                correct: true,
                text: "la ragazza sorrise",
                audioSrc: "/it_chica_sonrio.mp3"
            },
            {
                challengeId: 32,
                correct: false,
                text: "gridò l'uomo",
                audioSrc: "/it_hombre_lloro.mp3"
            },
            {
                challengeId: 32,
                correct: false,
                text: "il robot si è rotto",
                audioSrc: "/it_robot_rompio.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 33,
                correct: false,
                text: "la ragazza sorrise",
                audioSrc: "/it_chica_sonrio.mp3"
            },
            {
                challengeId: 33,
                correct: false,
                text: "gridò l'uomo",
                audioSrc: "/it_hombre_lloro.mp3"
            },
            {
                challengeId: 33,
                correct: true,
                text: "il robot si è rotto",
                audioSrc: "/it_robot_rompio.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 34,
                correct: false,
                text: "la donna è bella",
                audioSrc: "/it_mujer_hermosa.mp3"
            },
            {
                challengeId: 34,
                correct: true,
                text: "lo zombie è brutto",
                audioSrc: "/it_zombie_feo.mp3"
            },
            {
                challengeId: 34,
                correct: false,
                text: "il robot è molto utile",
                audioSrc: "/it_robot_util.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 35,
                correct: true,
                text: "la donna è bella",
                audioSrc: "/it_mujer_hermosa.mp3"
            },
            {
                challengeId: 35,
                correct: false,
                text: "lo zombie è brutto",
                audioSrc: "/it_zombie_feo.mp3"
            },
            {
                challengeId: 35,
                correct: false,
                text: "il robot è molto utile",
                audioSrc: "/it_robot_util.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 36,
                correct: false,
                text: "la donna è bella",
                audioSrc: "/it_mujer_hermosa.mp3"
            },
            {
                challengeId: 36,
                correct: false,
                text: "lo zombie è brutto",
                audioSrc: "/it_zombie_feo.mp3"
            },
            {
                challengeId: 36,
                correct: true,
                text: "il robot è molto utile",
                audioSrc: "/it_robot_util.mp3"
            },
        ])

         await db.insert(schema.challengeOptions).values([
            {
                challengeId: 37,
                imageSrc: "/man.svg",
                correct: true,
                text: "l'homme",
                audioSrc: "/fr_man.mp3"
            },
            {
                challengeId: 37,
                imageSrc: "/woman.svg",
                correct: false,
                text: "la femme",
                audioSrc: "/fr_woman.mp3"
            },
            {
                challengeId: 37,
                imageSrc: "/robot.svg",
                correct: false,
                text: "le robot",
                audioSrc: "/fr_robot.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 38,
                correct: true,
                text: "l'homme",
                audioSrc: "/fr_man.mp3"
            },
            {
                challengeId: 38,
                correct: false,
                text: "la femme",
                audioSrc: "/fr_woman.mp3"
            },
            {
                challengeId: 38,
                correct: false,
                text: "le robot",
                audioSrc: "/fr_robot.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 39,
                imageSrc: "/man.svg",
                correct: false,
                text: "l'homme",
                audioSrc: "/fr_man.mp3"
            },
            {
                challengeId: 39,
                imageSrc: "/woman.svg",
                correct: false,
                text: "la femme",
                audioSrc: "/fr_woman.mp3"
            },
            {
                challengeId: 39,
                imageSrc: "/robot.svg",
                correct: true,
                text: "le robot",
                audioSrc: "/fr_robot.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 40,
                correct: true,
                text: "le garçon",
                audioSrc: "/fr_boy.mp3",
                imageSrc: "boy.svg"
            },
            {
                challengeId: 40,
                correct: false,
                text: "la fille",
                audioSrc: "/fr_girl.mp3",
                imageSrc: "girl.svg"
            },
            {
                challengeId: 40,
                correct: false,
                text: "le zombie",
                audioSrc: "/fr_zombie.mp3",
                imageSrc: "zombie.svg"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 41,
                correct: false,
                text: "le garçon",
                audioSrc: "/fr_boy.mp3"
            },
            {
                challengeId: 41,
                correct: false,
                text: "la fille",
                audioSrc: "/fr_girl.mp3"
            },
            {
                challengeId: 41,
                correct: true,
                text: "le zombie",
                audioSrc: "/fr_zombie.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 42,
                correct: false,
                text: "le garçon",
                audioSrc: "/fr_boy.mp3",
                imageSrc: "boy.svg"
            },
            {
                challengeId: 42,
                correct: true,
                text: "la fille",
                audioSrc: "/fr_girl.mp3",
                imageSrc: "girl.svg"
            },
            {
                challengeId: 42,
                correct: false,
                text: "le zombie",
                audioSrc: "/fr_zombie.mp3",
                imageSrc: "zombie.svg"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 43,
                correct: false,
                text: "la fraise",
                audioSrc: "/fr_fresa.mp3"
            },
            {
                challengeId: 43,
                correct: true,
                text: "l'ananas",
                audioSrc: "/fr_pina.mp3"
            },
            {
                challengeId: 43,
                correct: false,
                text: "la pomme",
                audioSrc: "/fr_manzana.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 44,
                correct: false,
                text: "la fraise",
                audioSrc: "/fr_fresa.mp3"
            },
            {
                challengeId: 44,
                correct: false,
                text: "l'ananas",
                audioSrc: "/fr_pina.mp3"
            },
            {
                challengeId: 44,
                correct: true,
                text: "la pomme",
                audioSrc: "/fr_manzana.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 45,
                correct: true,
                text: "la fraise",
                audioSrc: "/fr_fresa.mp3"
            },
            {
                challengeId: 45,
                correct: false,
                text: "l'ananas",
                audioSrc: "/fr_pina.mp3"
            },
            {
                challengeId: 45,
                correct: false,
                text: "la pomme",
                audioSrc: "/fr_manzana.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 46,
                correct: false,
                text: "la fille a mangé la fraise",
                audioSrc: "/fr_chica_fresca.mp3"
            },
            {
                challengeId: 46,
                correct: false,
                text: "l'homme a mangé la fraise",
                audioSrc: "/fr_hombre_fresca.mp3"
            },
            {
                challengeId: 46,
                correct: true,
                text: "le garçon a mangé la pomme",
                audioSrc: "/fr_nino_manzana.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 47,
                correct: true,
                text: "la fille a mangé la fraise",
                audioSrc: "/fr_chica_fresca.mp3"
            },
            {
                challengeId: 47,
                correct: false,
                text: "l'homme a mangé la fraise",
                audioSrc: "/fr_hombre_fresca.mp3"
            },
            {
                challengeId: 47,
                correct: false,
                text: "le garçon a mangé la pomme",
                audioSrc: "/fr_nino_manzana.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 48,
                correct: false,
                text: "la fille a mangé la fraise",
                audioSrc: "/fr_chica_fresca.mp3"
            },
            {
                challengeId: 48,
                correct: true,
                text: "l'homme a mangé la fraise",
                audioSrc: "/fr_hombre_fresca.mp3"
            },
            {
                challengeId: 48,
                correct: false,
                text: "le garçon a mangé la pomme",
                audioSrc: "/fr_nino_manzana.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 49,
                correct: false,
                text: "la fille a souri",
                audioSrc: "/fr_chica_sonrio.mp3"
            },
            {
                challengeId: 49,
                correct: true,
                text: "l'homme a pleuré",
                audioSrc: "/fr_hombre_lloro.mp3"
            },
            {
                challengeId: 49,
                correct: false,
                text: "le robot est tombé en panne",
                audioSrc: "/fr_robot_rompio.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 50,
                correct: true,
                text: "la fille a souri",
                audioSrc: "/fr_chica_sonrio.mp3"
            },
            {
                challengeId: 50,
                correct: false,
                text: "l'homme a pleuré",
                audioSrc: "/fr_hombre_lloro.mp3"
            },
            {
                challengeId: 50,
                correct: false,
                text: "le robot est tombé en panne",
                audioSrc: "/fr_robot_rompio.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 51,
                correct: false,
                text: "la fille a souri",
                audioSrc: "/fr_chica_sonrio.mp3"
            },
            {
                challengeId: 51,
                correct: false,
                text: "l'homme a pleuré",
                audioSrc: "/fr_hombre_lloro.mp3"
            },
            {
                challengeId: 51,
                correct: true,
                text: "le robot est tombé en panne",
                audioSrc: "/fr_robot_rompio.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 52,
                correct: false,
                text: "la femme est belle",
                audioSrc: "/fr_mujer_hermosa.mp3"
            },
            {
                challengeId: 52,
                correct: true,
                text: "le zombie est moche",
                audioSrc: "/fr_zombie_feo.mp3"
            },
            {
                challengeId: 52,
                correct: false,
                text: "le robot est très utile",
                audioSrc: "/fr_robot_util.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 53,
                correct: true,
                text: "la femme est belle",
                audioSrc: "/fr_mujer_hermosa.mp3"
            },
            {
                challengeId: 53,
                correct: false,
                text: "le zombie est moche",
                audioSrc: "/fr_zombie_feo.mp3"
            },
            {
                challengeId: 53,
                correct: false,
                text: "le robot est très utile",
                audioSrc: "/fr_robot_util.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 54,
                correct: false,
                text: "la femme est belle",
                audioSrc: "/fr_mujer_hermosa.mp3"
            },
            {
                challengeId: 54,
                correct: false,
                text: "le zombie est moche",
                audioSrc: "/fr_zombie_feo.mp3"
            },
            {
                challengeId: 54,
                correct: true,
                text: "le robot est très utile",
                audioSrc: "fr_robot_util.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 55,
                imageSrc: "/man.svg",
                correct: true,
                text: "čovjek",
                audioSrc: "/hr_man.mp3"
            },
            {
                challengeId: 55,
                imageSrc: "/woman.svg",
                correct: false,
                text: "žena",
                audioSrc: "/hr_woman.mp3"
            },
            {
                challengeId: 55,
                imageSrc: "/robot.svg",
                correct: false,
                text: "robot",
                audioSrc: "/hr_robot.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 56,
                correct: true,
                text: "čovjek",
                audioSrc: "/hr_man.mp3"
            },
            {
                challengeId: 56,
                correct: false,
                text: "žena",
                audioSrc: "/hr_woman.mp3"
            },
            {
                challengeId: 56,
                correct: false,
                text: "robot",
                audioSrc: "/hr_robot.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 57,
                imageSrc: "/man.svg",
                correct: false,
                text: "čovjek",
                audioSrc: "/hr_man.mp3"
            },
            {
                challengeId: 57,
                imageSrc: "/woman.svg",
                correct: false,
                text: "žena",
                audioSrc: "/hr_woman.mp3"
            },
            {
                challengeId: 57,
                imageSrc: "/robot.svg",
                correct: true,
                text: "robot",
                audioSrc: "/hr_robot.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 58,
                correct: true,
                text: "dječak",
                audioSrc: "/hr_boy.mp3",
                imageSrc: "boy.svg"
            },
            {
                challengeId: 58,
                correct: false,
                text: "djevojčica",
                audioSrc: "/hr_girl.mp3",
                imageSrc: "girl.svg"
            },
            {
                challengeId: 58,
                correct: false,
                text: "zombi",
                audioSrc: "/hr_zombie.mp3",
                imageSrc: "zombie.svg"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 59,
                correct: false,
                text: "dječak",
                audioSrc: "/hr_boy.mp3"
            },
            {
                challengeId: 59,
                correct: false,
                text: "djevojčica",
                audioSrc: "/hr_girl.mp3"
            },
            {
                challengeId: 59,
                correct: true,
                text: "zombi",
                audioSrc: "/hr_zombie.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 60,
                correct: false,
                text: "dječak",
                audioSrc: "/hr_boy.mp3",
                imageSrc: "boy.svg"
            },
            {
                challengeId: 60,
                correct: true,
                text: "djevojčica",
                audioSrc: "/hr_girl.mp3",
                imageSrc: "girl.svg"
            },
            {
                challengeId: 60,
                correct: false,
                text: "zombi",
                audioSrc: "/hr_zombie.mp3",
                imageSrc: "zombie.svg"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 61,
                correct: false,
                text: "jagoda",
                audioSrc: "/hr_fresa.mp3"
            },
            {
                challengeId: 61,
                correct: true,
                text: "ananas",
                audioSrc: "/hr_pina.mp3"
            },
            {
                challengeId: 61,
                correct: false,
                text: "jabuka",
                audioSrc: "/hr_manzana.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 62,
                correct: false,
                text: "jagoda",
                audioSrc: "/hr_fresa.mp3"
            },
            {
                challengeId: 62,
                correct: false,
                text: "ananas",
                audioSrc: "/hr_pina.mp3"
            },
            {
                challengeId: 62,
                correct: true,
                text: "jabuka",
                audioSrc: "/hr_manzana.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 63,
                correct: true,
                text: "jagoda",
                audioSrc: "/hr_fresa.mp3"
            },
            {
                challengeId: 63,
                correct: false,
                text: "ananas",
                audioSrc: "/hr_pina.mp3"
            },
            {
                challengeId: 63,
                correct: false,
                text: "jabuka",
                audioSrc: "/hr_manzana.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 64,
                correct: false,
                text: "djevojčica je pojela jagodu",
                audioSrc: "/hr_chica_fresca.mp3"
            },
            {
                challengeId: 64,
                correct: false,
                text: "čovjek je pojeo jagodu",
                audioSrc: "/hr_hombre_fresca.mp3"
            },
            {
                challengeId: 64,
                correct: true,
                text: "dječak je pojeo jabuku",
                audioSrc: "/hr_nino_manzana.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 65,
                correct: true,
                text: "djevojčica je pojela jagodu",
                audioSrc: "/hr_chica_fresca.mp3"
            },
            {
                challengeId: 65,
                correct: false,
                text: "čovjek je pojeo jagodu",
                audioSrc: "/hr_hombre_fresca.mp3"
            },
            {
                challengeId: 65,
                correct: false,
                text: "dječak je pojeo jabuku",
                audioSrc: "/hr_nino_manzana.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 66,
                correct: false,
                text: "djevojčica je pojela jagodu",
                audioSrc: "/hr_chica_fresca.mp3"
            },
            {
                challengeId: 66,
                correct: true,
                text: "čovjek je pojeo jagodu",
                audioSrc: "/hr_hombre_fresca.mp3"
            },
            {
                challengeId: 66,
                correct: false,
                text: "dječak je pojeo jabuku",
                audioSrc: "/hr_nino_manzana.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 67,
                correct: false,
                text: "djevojčica se nasmijala",
                audioSrc: "/hr_chica_sonrio.mp3"
            },
            {
                challengeId: 67,
                correct: true,
                text: "muškarac je plakao",
                audioSrc: "/hr_hombre_lloro.mp3"
            },
            {
                challengeId: 67,
                correct: false,
                text: "robot se pokvario",
                audioSrc: "/hr_robot_rompio.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 68,
                correct: true,
                text: "djevojčica se nasmijala",
                audioSrc: "/hr_chica_sonrio.mp3"
            },
            {
                challengeId: 68,
                correct: false,
                text: "muškarac je plakao",
                audioSrc: "/hr_hombre_lloro.mp3"
            },
            {
                challengeId: 68,
                correct: false,
                text: "robot se pokvario",
                audioSrc: "/hr_robot_rompio.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 69,
                correct: false,
                text: "djevojčica se nasmijala",
                audioSrc: "/hr_chica_sonrio.mp3"
            },
            {
                challengeId: 69,
                correct: false,
                text: "muškarac je plakao",
                audioSrc: "/hr_hombre_lloro.mp3"
            },
            {
                challengeId: 69,
                correct: true,
                text: "robot se pokvario",
                audioSrc: "/hr_robot_rompio.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 70,
                correct: false,
                text: "žena je lijepa",
                audioSrc: "/hr_mujer_hermosa.mp3"
            },
            {
                challengeId: 70,
                correct: true,
                text: "zombi je ružan",
                audioSrc: "/hr_zombie_feo.mp3"
            },
            {
                challengeId: 70,
                correct: false,
                text: "robot je vrlo koristan",
                audioSrc: "/hr_robot_util.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 71,
                correct: true,
                text: "žena je lijepa",
                audioSrc: "/hr_mujer_hermosa.mp3"
            },
            {
                challengeId: 71,
                correct: false,
                text: "zombi je ružan",
                audioSrc: "/hr_zombie_feo.mp3"
            },
            {
                challengeId: 71,
                correct: false,
                text: "robot je vrlo koristan",
                audioSrc: "/hr_robot_util.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 72,
                correct: false,
                text: "žena je lijepa",
                audioSrc: "/hr_mujer_hermosa.mp3"
            },
            {
                challengeId: 72,
                correct: false,
                text: "zombi je ružan",
                audioSrc: "/hr_zombie_feo.mp3"
            },
            {
                challengeId: 72,
                correct: true,
                text: "robot je vrlo koristan",
                audioSrc: "/hr_robot_util.mp3"
            },
        ])

         await db.insert(schema.challengeOptions).values([
            {
                challengeId: 73,
                imageSrc: "/man.svg",
                correct: true,
                text: "ザ・マン",
                audioSrc: "/jp_man.mp3"
            },
            {
                challengeId: 73,
                imageSrc: "/woman.svg",
                correct: false,
                text: "ザ・ウーマン",
                audioSrc: "/jp_woman.mp3"
            },
            {
                challengeId: 73,
                imageSrc: "/robot.svg",
                correct: false,
                text: "ロボット",
                audioSrc: "/jp_robot.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 74,
                correct: true,
                text: "ザ・マン",
                audioSrc: "/jp_man.mp3"
            },
            {
                challengeId: 74,
                correct: false,
                text: "ザ・ウーマン",
                audioSrc: "/jp_woman.mp3"
            },
            {
                challengeId: 74,
                correct: false,
                text: "ロボット",
                audioSrc: "/jp_robot.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 75,
                imageSrc: "/man.svg",
                correct: false,
                text: "ザ・マン",
                audioSrc: "/jp_man.mp3"
            },
            {
                challengeId: 75,
                imageSrc: "/woman.svg",
                correct: false,
                text: "ザ・ウーマン",
                audioSrc: "/jp_woman.mp3"
            },
            {
                challengeId: 75,
                imageSrc: "/robot.svg",
                correct: true,
                text: "ロボット",
                audioSrc: "/jp_robot.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 76,
                correct: true,
                text: "ザ・ボーイ",
                audioSrc: "/jp_boy.mp3",
                imageSrc: "boy.svg"
            },
            {
                challengeId: 76,
                correct: false,
                text: "その女の子a",
                audioSrc: "/jp_girl.mp3",
                imageSrc: "girl.svg"
            },
            {
                challengeId: 76,
                correct: false,
                text: "ゾンビ",
                audioSrc: "/jp_zombie.mp3",
                imageSrc: "zombie.svg"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 77,
                correct: false,
                text: "ザ・ボーイ",
                audioSrc: "/jp_boy.mp3"
            },
            {
                challengeId: 77,
                correct: false,
                text: "その女の子",
                audioSrc: "/jp_girl.mp3"
            },
            {
                challengeId: 77,
                correct: true,
                text: "ゾンビ",
                audioSrc: "/jp_zombie.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 78,
                correct: false,
                text: "ザ・ボーイ",
                audioSrc: "/jp_boy.mp3",
                imageSrc: "boy.svg"
            },
            {
                challengeId: 78,
                correct: true,
                text: "その女の子",
                audioSrc: "/jp_girl.mp3",
                imageSrc: "girl.svg"
            },
            {
                challengeId: 78,
                correct: false,
                text: "ゾンビ",
                audioSrc: "/jp_zombie.mp3",
                imageSrc: "zombie.svg"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 79,
                correct: false,
                text: "ストロベリー",
                audioSrc: "/jp_fresa.mp3"
            },
            {
                challengeId: 79,
                correct: true,
                text: "パイナップル",
                audioSrc: "/jp_pina.mp3"
            },
            {
                challengeId: 79,
                correct: false,
                text: "りんご",
                audioSrc: "/jp_manzana.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 80,
                correct: false,
                text: "ストロベリー",
                audioSrc: "/jp_fresa.mp3"
            },
            {
                challengeId: 80,
                correct: false,
                text: "パイナップル",
                audioSrc: "/jp_pina.mp3"
            },
            {
                challengeId: 80,
                correct: true,
                text: "りんご",
                audioSrc: "/jp_manzana.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 81,
                correct: true,
                text: "ストロベリー",
                audioSrc: "/jp_fresa.mp3"
            },
            {
                challengeId: 81,
                correct: false,
                text: "パイナップル",
                audioSrc: "/jp_pina.mp3"
            },
            {
                challengeId: 81,
                correct: false,
                text: "りんご",
                audioSrc: "/jp_manzana.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 82,
                correct: false,
                text: "女の子はイチゴを食べました",
                audioSrc: "/jp_chica_fresca.mp3"
            },
            {
                challengeId: 82,
                correct: false,
                text: "男はイチゴを食べた",
                audioSrc: "/jp_hombre_fresca.mp3"
            },
            {
                challengeId: 82,
                correct: true,
                text: "男の子はリンゴを食べました",
                audioSrc: "/jp_nino_manzana.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 83,
                correct: true,
                text: "女の子はイチゴを食べました",
                audioSrc: "/jp_chica_fresca.mp3"
            },
            {
                challengeId: 83,
                correct: false,
                text: "男はイチゴを食べた",
                audioSrc: "/jp_hombre_fresca.mp3"
            },
            {
                challengeId: 83,
                correct: false,
                text: "男の子はリンゴを食べました",
                audioSrc: "/jp_nino_manzana.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 84,
                correct: false,
                text: "女の子はイチゴを食べました",
                audioSrc: "/jp_chica_fresca.mp3"
            },
            {
                challengeId: 84,
                correct: true,
                text: "男はイチゴを食べた",
                audioSrc: "/jp_hombre_fresca.mp3"
            },
            {
                challengeId: 84,
                correct: false,
                text: "男の子はリンゴを食べました",
                audioSrc: "/jp_nino_manzana.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 85,
                correct: false,
                text: "少女は微笑んだ",
                audioSrc: "/jp_chica_sonrio.mp3"
            },
            {
                challengeId: 85,
                correct: true,
                text: "男は叫んだ",
                audioSrc: "/jp_hombre_lloro.mp3"
            },
            {
                challengeId: 85,
                correct: false,
                text: "ロボットが壊れた",
                audioSrc: "/jp_robot_rompio.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 86,
                correct: true,
                text: "少女は微笑んだ",
                audioSrc: "/jp_chica_sonrio.mp3"
            },
            {
                challengeId: 86,
                correct: false,
                text: "男は叫んだ",
                audioSrc: "/jp_hombre_lloro.mp3"
            },
            {
                challengeId: 86,
                correct: false,
                text: "ロボットが壊れた",
                audioSrc: "/jp_robot_rompio.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 87,
                correct: false,
                text: "少女は微笑んだ",
                audioSrc: "/jp_chica_sonrio.mp3"
            },
            {
                challengeId: 87,
                correct: false,
                text: "男は叫んだ",
                audioSrc: "/jp_hombre_lloro.mp3"
            },
            {
                challengeId: 87,
                correct: true,
                text: "ロボットが壊れた",
                audioSrc: "/jp_robot_rompio.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 88,
                correct: false,
                text: "女性は美しいです",
                audioSrc: "/jp_mujer_hermosa.mp3"
            },
            {
                challengeId: 88,
                correct: true,
                text: "ゾンビは醜いです",
                audioSrc: "/jp_zombie_feo.mp3"
            },
            {
                challengeId: 88,
                correct: false,
                text: "ロボットはとても便利です",
                audioSrc: "/jp_robot_util.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 89,
                correct: true,
                text: "女性は美しいです",
                audioSrc: "/jp_mujer_hermosa.mp3"
            },
            {
                challengeId: 89,
                correct: false,
                text: "ゾンビは醜いです",
                audioSrc: "/jp_zombie_feo.mp3"
            },
            {
                challengeId: 89,
                correct: false,
                text: "ロボットはとても便利です",
                audioSrc: "/jp_robot_util.mp3"
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 90,
                correct: false,
                text: "女性は美しいです",
                audioSrc: "/jp_mujer_hermosa.mp3"
            },
            {
                challengeId: 90,
                correct: false,
                text: "ゾンビは醜いです",
                audioSrc: "/jp_zombie_feo.mp3"
            },
            {
                challengeId: 90,
                correct: true,
                text: "ロボットはとても便利です",
                audioSrc: "/jp_robot_util.mp3"
            },
        ])

        console.log("Seeding finished")
    } catch (error) {
        console.error(error)
        throw new Error("Failed to seed the database")
    }
}

main()