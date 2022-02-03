import React, { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon, XIcon } from '@heroicons/react/outline'
import { useEditorState } from '../../NewHeader/withEditorState'
import Button from '../Button'
import { deleteSnippet } from '../../../api/delete-snippet'
import { useSnippetState } from '../../MainContainer/withSnippetState'

const DeleteSnippetAlert = () => {
  const { editorState, dispatch } = useEditorState()
  const { invalidateSnippetsList } = useSnippetState()
  let dialogRef = useRef(null)

  const handleClose = () => {
    dispatch({ type: 'is-deleting-modal', payload: { isOpen: false, id: null, title: '' } })
  }

  const handleDelete = id => {
    deleteSnippet(id).then(data => {
      invalidateSnippetsList()
      handleClose()
      // getSnippets().then(data => setSnippets(data?.snippets))
    })
  }

  return (
    <Transition.Root show={editorState?.isDeletingModal?.isOpen} as={Fragment}>
      <Dialog
        initialFocus={dialogRef}
        as='div'
        className='fixed z-10 inset-0 overflow-y-auto'
        onClose={handleClose}
      >
        <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div className='inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6'>
              <div className='hidden sm:block absolute top-0 right-0 pt-4 pr-4'>
                <button
                  type='button'
                  className='bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  onClick={handleClose}
                >
                  <span className='sr-only'>Close</span>
                  <XIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>
              <div className='sm:flex sm:items-start'>
                <div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'>
                  <ExclamationIcon className='h-6 w-6 text-red-600' aria-hidden='true' />
                </div>
                <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                  <Dialog.Title as='h3' className='text-lg leading-6 font-medium text-gray-900'>
                    Delete Snippet
                  </Dialog.Title>
                  <div className='mt-2'>
                    <p className='text-sm text-gray-500'>
                      {`Are you sure you want to delete the snippet: ${editorState?.isDeletingModal?.title}?`}
                    </p>
                  </div>
                </div>
              </div>
              <div className='mt-5 sm:mt-4 sm:flex sm:flex-row-reverse'>
                <button
                  type='button'
                  className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm'
                  onClick={() => handleDelete(editorState?.isDeletingModal?.id)}
                >
                  Delete
                </button>
                <Button
                  type={'button'}
                  status={'cancel'}
                  size={'small'}
                  onClick={handleClose}
                  title={'Cancel'}
                />
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default DeleteSnippetAlert
