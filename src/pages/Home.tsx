import { useState } from "react";

import Counter from "../components/examples/Counter";
import Modal from "../components/UI/Modal";
import LoginButton from "../components/auth0/LoginButton";
import LogoutButton from "../components/auth0/LogoutButton";

export function Home() {
    const [modal, setModal] = useState(false)

    return (
        <>
            <div className="container mx-auto max-w-2xl pt-5">
                <h1 className="container mx-auto max-w-2xl pt-5">Quiz Project</h1>
                <p>Welcome to Quiz Project Homepage.</p>
            </div>

            <LoginButton />
            <LogoutButton />

            {modal && <Modal title="Simple Counter" onClose={() => setModal(false)}>
                <Counter />
            </Modal>}

            <button
                className="fixed bottom-10 right-10 rounded-lg p-5 mx-1 bg-slate-100"
                onClick={() => setModal(true)}
            > 	Modal 
			</button>
        </>
    );
}
