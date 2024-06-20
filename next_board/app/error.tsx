'use client'

import { useRouter } from "next/navigation"

export default function ErrorHandle() {
    useRouter().push("/")
}