import { useLocation } from 'react-router-dom';

export const useBreadCrumbs = () => {
    const { pathname } = useLocation();

    const breadcrumbs = pathname.split('/').filter((crumb) => crumb);

    // remove the first element
    breadcrumbs.shift();


    return breadcrumbs;
}
