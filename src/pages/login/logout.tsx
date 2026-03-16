import React, { useEffect } from 'react';
import { systemLogout } from '@/services/oauth.api';
import { deleteToken, getAllLoginedOrgs } from '@/utils/global';

const Logout: React.FC = () => {
    const loginOut = async () => {
        await systemLogout({ organizations: getAllLoginedOrgs() });
        // 删除全局Token
        deleteToken();
        window.location.href = '/user/login';
    };
    useEffect(() => {
        loginOut();
    }, []);
    return (<>
    </>);
}
export default Logout;