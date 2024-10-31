import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const ProtectedRoute = ({ user, children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate(-1); // Go back to the previous page
        }
    }, [user, navigate]);

    return user ? null : children;
};