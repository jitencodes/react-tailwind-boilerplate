import { useState, useEffect } from 'react';

const useForm = (callback, validate, post) => {
    const [values, setValues] = useState(post || {});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);
  
  
  const handleSubmit = (event) => {
        if (event) event.preventDefault();
        console.log('values in useForm', values)
        setErrors(validate(values))
    setIsSubmitting(true);
  };

    const handleInputChange = (event) => {
        event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    };
    


  return {
    handleInputChange,
    handleSubmit,
    values,
    errors,
  }
};

export default useForm;