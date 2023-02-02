import * as types from './profile.types'
import { createClient } from '@supabase/supabase-js'

const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const NEXT_PUBLIC_SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY as string

const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_KEY)

export const createApi = (): types.api => {
    return {
        getUser: async () => {
            const sessionRequest = await supabase.auth.getSession()
            if (!sessionRequest || !sessionRequest.data.session?.access_token) return null

            const response = sessionRequest.data.session?.user
            if (!response || !response.email) return null

            return {
                email: response.email,
                id: response.id,
                token: sessionRequest.data.session?.access_token,
            }
        },

        signIn: async (props) => {
            try {
                const { email, password } = props
                const response = await supabase.auth.signInWithPassword({ email, password })
    
                if (response.error) return {
                    status: 'error',
                    error: response.error.message,
                }

                if (!response.data.session) throw new Error('"session" is expected')
                if (!response.data.user) throw new Error('"user" is expected')

                return {
                    status: 'success',
                    user: {
                        email,
                        id: response.data.user?.id,
                        token: response.data.session?.access_token,
                    },
                }
            } catch (error) {
                console.error(error)
                return {
                    status: 'error',
                    error: 'Something went wrong on our side, please try again',
                }
            }
        }, 

        signOut: async () => {
            supabase.auth.signOut()
        }, 

        resetPassword: async (props: { email: string }) => {
            const { email } = props
            supabase.auth.resetPasswordForEmail(email)
        }, 

        signUp: async (props) => {
            try {
                const { email, password } = props
                const response = await supabase.auth.signUp({ email, password })
    
                if (response.error) return {
                    status: 'error',
                    error: response.error.message,
                }

                 return {
                    status: 'success',
                    error: null,
                }
                
            } catch (error) {
                console.error(error)
                return {
                    status: 'error',
                    error: 'Something went wrong on our side, please try again',
                }
            }
        },

    }
}
