import { LogIn, LogOut } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from '@/config/firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logged, setLogged] = useState(false);
  console.log(auth?.currentUser?.email)

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      setLogged(true)
    } catch (err) {
      console.error(err)
    } finally {
      console.log('finally')
      console.log(auth.currentUser?.email)
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);

      setLogged(true)
    } catch (err) {
      console.error(err)
    } finally {
      console.log('Logado')
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);

      setLogged(false)
    } catch (err) {
      console.error(err)
    } finally {
      console.log('User signOut')
    }
    console.log('User signOut after')
  };


  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button>
          <LogIn className="h-4 w-4 mr-2" />
          Login
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-0xl text-amber-700">
            <LogIn className="h-4 w-4 mr-2" />
          </DialogTitle>
          <DialogDescription className="text-0xl text-amber-700">
            Login
          </DialogDescription>
        </DialogHeader>
        {logged ?
          <span> {auth?.currentUser?.displayName || auth?.currentUser?.email} </span> :
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Label htmlFor="password">Senha</Label>
            <Input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        }
        <DialogFooter>
          {!logged ?
            <>
              <Button onClick={(signIn)}>
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
              <Button onClick={(signInWithGoogle)}>
                <LogIn className="h-4 w-4 mr-2" />
                Google
              </Button>
            </> :
            <Button onClick={(logout)}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          }
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )

}

export default Login;