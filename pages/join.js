import { Button, useToasts } from '@geist-ui/react'
import Router from 'next/router'
import firebase from 'firebase/app'
import 'firebase/auth'
import initFirebase from '../services/firebase'
import { useState } from 'react'

initFirebase()

const provider = new firebase.auth.GoogleAuthProvider()

export default function Join() {
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
        <Button onClick={handleAuthentication} loading={authorizing}>
            Hola
        </Button>
    )
}
