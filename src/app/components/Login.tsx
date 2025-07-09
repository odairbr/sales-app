import { LogIn } from 'lucide-react';

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

const Login = () => {
  
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

        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
          <Label htmlFor="password">Senha</Label>
          <Input type="password" id="password" />
        </div>
        <DialogFooter>
          <Button
            type="submit"
          >
            <LogIn className="h-4 w-4 mr-2" />
            Login
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )

}

export default Login;