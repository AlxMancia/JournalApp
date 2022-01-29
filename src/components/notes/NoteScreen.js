import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, starDeleting } from '../../actions/notes';
import { useForm } from '../../hook/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const dispatch = useDispatch();

    const {active} = useSelector( state => state.notes );

    const [ formValues, handleInputChange, reset ] = useForm(active);

    const {body,title,id} = formValues;

    const activeId = useRef(active.id);

    useEffect(() => {
        if(active.id !== activeId.current){
            reset(active);
            activeId.current = active.id;
        }
      
    }, [active,reset]);
    
    useEffect(() => {
        dispatch(activeNote(formValues.id,{...formValues}))
    }, [formValues,dispatch]);

    const handleDelete = () => {
        dispatch(starDeleting(id));
    }
    
    
    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    name='title'
                    value = {title}
                    onChange={handleInputChange}
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    name='body'
                    value={body}
                    onChange={handleInputChange}

                ></textarea>

                {
                    active.url &&
                    <div className="notes__image">
                        <img 
                            src={active.url}
                            alt="imagen"
                        />
                    </div>
                }


            </div>

            <button className='btn btn-danger' onClick={handleDelete}>
                Delete
            </button>

        </div>
    )
}
