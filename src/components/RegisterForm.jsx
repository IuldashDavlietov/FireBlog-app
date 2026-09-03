import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from 'react-router';
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/lib/shemas";
import { useAuth } from "@/hooks/useAuth";

export function RegisterForm({ ...props }) {
    const { registerUser } = useAuth();
    const navigate = useNavigate();

    const form = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            userName: "",
            firstName: "",
            lastName: "",
            email: "",
            image: "",
            bio: "",
            password: "",
        },
    });

    const handleSubmit = async (data) => {
        try {
            await registerUser(data);
            navigate('/');
        } catch (error) {
            console.error('Registration error:', error);
        }
    };

    return (
        <Card {...props} className='w-full max-w-sm'>
            <CardHeader>
                <CardTitle>Create an account</CardTitle>
                <CardDescription>
                    Enter your information below to create your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={form.handleSubmit(handleSubmit)}>
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="username">User Name</FieldLabel>
                            <Input id="username" type="text" placeholder="User Name" {...form.register('username')} />
                            {form.formState.errors.userName && (
                                <p className="text-xs text-destructive mt-1">
                                    {form.formState.errors.userName.message}
                                </p>
                            )}
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                            <Input id="firstName" type="text" placeholder="First Name" {...form.register('firstName')} />
                            {form.formState.errors.firstName && (
                                <p className="text-xs text-destructive mt-1">
                                    {form.formState.errors.firstName.message}
                                </p>
                            )}
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                            <Input id="lastName" type="text" placeholder="Last Name" {...form.register('lastName')} />
                            {form.formState.errors.lastName && (
                                <p className="text-xs text-destructive mt-1">
                                    {form.formState.errors.lastName.message}
                                </p>
                            )}
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="email">Email</FieldLabel>
                            {/* Fixed JSX typo 'r' */}
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email address"
                                {...form.register('email')}
                            />
                            {form.formState.errors.email && (
                                <p className="text-xs text-destructive mt-1">
                                    {form.formState.errors.email.message}
                                </p>
                            )}
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="image">Image</FieldLabel>
                            <Input id="image" type="text" placeholder="Image" {...form.register('image')} />
                            {form.formState.errors.image && (
                                <p className="text-xs text-destructive mt-1">
                                    {form.formState.errors.image.message}
                                </p>
                            )}
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="bio">Bio</FieldLabel>
                            <Input id="bio" type="text" placeholder="Bio" {...form.register('bio')} />
                            {form.formState.errors.bio && (
                                <p className="text-xs text-destructive mt-1">
                                    {form.formState.errors.bio.message}
                                </p>
                            )}
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="password">Password</FieldLabel>
                            <Input id="password" type="password" placeholder='********' {...form.register('password')} />
                            {form.formState.errors.password ? (
                                <p className="text-xs text-destructive mt-1">
                                    {form.formState.errors.password.message}
                                </p>
                            ) : (
                                <FieldDescription>
                                    Must be at least 8 characters long.
                                </FieldDescription>
                            )}
                        </Field>

                        <FieldGroup>
                            <Field>
                                <Button type="submit">Create Account</Button>

                                <FieldDescription className="px-6 text-center">
                                    Already have an account? <NavLink to='/login'>Login</NavLink>
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </FieldGroup>
                </form>
            </CardContent>
        </Card>
    );
}