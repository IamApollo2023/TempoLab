import { useState } from "react";
import { useRouter } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";

interface AuthFormProps {
  isOpen?: boolean;
  defaultTab?: "login" | "register";
  onClose?: () => void;
  variant?: "dialog" | "page";
}

const AuthForm = ({
  isOpen = false,
  defaultTab = "login",
  onClose = () => {},
  variant = "dialog",
}: AuthFormProps) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleAuth = (type: "login" | "register") => {
    // Here you would normally handle the actual auth
    if (variant === "dialog") {
      onClose();
    }
    router.push("/apply");
  };

  const AuthContent = (
    <div className="w-full max-w-md mx-auto">
      <Tabs
        defaultValue={defaultTab}
        className="w-full"
        onValueChange={setActiveTab}
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>

        <TabsContent value="login" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <Button
            className="w-full bg-emerald-600 hover:bg-emerald-700"
            onClick={() => handleAuth("login")}
          >
            Login
          </Button>
        </TabsContent>

        <TabsContent value="register" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="Enter your full name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="register-email">Email</Label>
            <Input
              type="email"
              id="register-email"
              placeholder="Enter your email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="register-password">Password</Label>
            <Input
              type="password"
              id="register-password"
              placeholder="Create a password"
            />
          </div>
          <Button
            className="w-full bg-emerald-600 hover:bg-emerald-700"
            onClick={() => handleAuth("register")}
          >
            Register
          </Button>
        </TabsContent>
      </Tabs>
    </div>
  );

  if (variant === "dialog") {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Welcome to DMMMSU</DialogTitle>
            <DialogDescription>
              Sign in to your account or create a new one to start your
              application.
            </DialogDescription>
          </DialogHeader>
          {AuthContent}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="p-6 w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Welcome to DMMMSU</h1>
          <p className="text-gray-600 mt-2">
            Sign in to your account or create a new one to start your
            application.
          </p>
        </div>
        {AuthContent}
      </Card>
    </div>
  );
};

export default AuthForm;
