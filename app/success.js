import { useRouter } from "next/navigation";

export default function success(){
    const router = useRouter();
    return(
        <main className="h-screen flex items-center justify-center">
            <div className="bg-white rounded-lg w-1/2 font-bold text-gr p-16">
                <h1 className="text-3xl pb-4 font-bold">
                    Thanks for the email {router.name}
                </h1>
                <p className="text-lg text-gray-500">
                    We have sent you an email over at {router.name}. We will get back to you as soon as we can! 
                </p>
            </div>
        </main>
    )
}