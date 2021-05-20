import Head from 'next/head'
import Link from 'next/link'
import { Button } from '@geist-ui/react'
import Router from 'next/router'
import firebase from 'firebase/app'
import 'firebase/auth'
import initFirebase from '../../services/firebase'
import { useState } from 'react'

initFirebase()

const provider = new firebase.auth.GoogleAuthProvider()

export default function login() {
    const [authorizing, setAuthorizing] = useState(false)

    const handleAuthentication = async () => {
        setAuthorizing(true)
        try {
            const result = await firebase.auth().signInWithPopup(provider)
            const { user, credential } = result
            console.log({ user, credential })
            if (!user) {
                throw new Error('The was an issue authorizing')
            }
            Router.push('/mapa')
        } catch (error) {}
        setAuthorizing(false)
    }
    return (
        <>
            <Head>
                <title>eStreet | Entrar</title>
            </Head>
            <div className="w-full">
                <div className="flex bg-lightGray shadow">
                    <div className="w-64 h-screen bg-eerieBlack border-eerieBlack ">
                        <Link href="/">
                            <a>
                                <div className="logo">eStreet</div>
                            </a>
                        </Link>
                        <div className="mt-8 border-t border-imperialRed">
                            <Link href="/consejos">
                                <a className="elementosSideBar">Consejos</a>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="flex items-center w-full"
                        style={{ backgroundImage: 'url("../background.png")' }}
                    >
                        <div className="grid justify-items-center w-full">
                            <Button
                                onClick={handleAuthentication}
                                loading={authorizing}
                            >
                                Entrar
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
