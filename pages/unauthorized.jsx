import React from 'react'
import {useSession, signIn, signOut} from 'next-auth/react'

const failedauth = () => {
    return(<div>Unauthorized: only @ku.edu.np domains allowed.</div>)
}

export default failedauth