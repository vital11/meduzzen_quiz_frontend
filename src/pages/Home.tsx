import { useState } from "react";

import Counter from "../components/examples/Counter";
import Modal from "../components/UI/Modal";


export function Home() {
    const [modal, setModal] = useState(false)

    return (
        <>
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
