import { useState, useEffect } from 'react';

const useFormValidation = (callback, validate) => {
    const [dirty, setDirty] = useState({});
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            setIsSubmitting(false);
            callback();
        }
    }, [errors, isSubmitting, callback]);

    const handleChange = event => {
        const target = event.target.name;
        const value = event.target.value;
        const error = validate({
            ...values,
            [target]: value
        })[target];

        event.persist();

        setValues(values => ({
            ...values,
            [target]: value
        }));

        if (error && dirty[target]) {
            setErrors(errors => ({
                ...errors,
                [target]: error
            }));
        } else if (!error) {
            setErrors(errors => ({
                ...errors,
                [target]: error
            }));
            setDirty(dirty => ({
                ...dirty,
                [target]: true
            }));
        }
    };

    // I will leave this here as it handles marking a field as dirty or `invalid` once it is blurred
    // It will handle the user leaving the input without a change event and mark it in a `error` state
    // This could be a product/UX decision to be discussed and it can be simply uncommented
    const handleBlur = event => {
        // const target = event.target.name;
        // const value = event.target.value;
        // const error = validate({
        //   ...values,
        //   [target]: value
        // })[target];

        // setErrors(errors => ({
        //   ...errors,
        //   [target]: error
        // }));
        // setDirty(dirty => ({
        //   ...dirty,
        //   [target]: true
        // }));
    }

    const handleSubmit = event => {
        if (event) {
            event.preventDefault();
        }

        setErrors(validate(values));
        setIsSubmitting(true);
    };

    return {
        handleBlur,
        handleChange,
        handleSubmit,
        dirty,
        errors,
        values
    }
};

export default useFormValidation;