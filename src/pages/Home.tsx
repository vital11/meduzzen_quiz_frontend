import { useContext } from "react"
import Counter from "../components/examples/Counter"
import { Modal } from "../components/UI/Modal"
import { ModalContext } from "../context/ModalContext"



export function Home() {
  const {modal, openModal, closeModal} = useContext(ModalContext)

  return (
    <>
      <div className='container mx-auto max-w-2xl pt-5'>
        <h1 className='container mx-auto max-w-2xl pt-5'>Quiz Project</h1>
        <p>Welcome to Quiz Project Homepage.</p>
      </div> 

      {modal && <Modal title="Simple Counter" onClose={closeModal}>
        <Counter />
      </Modal>}

      <button 
        className='fixed bottom-10 right-10 rounded-lg p-5 mx-1 bg-slate-100' 
        onClick={openModal}>
          Modal
      </button> 
    </>
  )
}

