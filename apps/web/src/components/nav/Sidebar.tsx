import { useLocation } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { LocalNavMenu } from '../../studio/components/LocalNavMenu';
import { RootNavMenu } from './RootNavMenu';
import { SettingsNavMenu } from './SettingsNavMenu';
import { Aside } from './Aside';

export const Sidebar = () => {
  const { pathname } = useLocation();

  if (
    pathname.startsWith(
      ROUTES.PARTNER_INTEGRATIONS_VERCEL_LINK_PROJECTS || ROUTES.PARTNER_INTEGRATIONS_VERCEL_LINK_PROJECTS_EDIT
    )
  ) {
    return null;
  }

  let Variant = RootNavMenu;

  if (pathname.startsWith(ROUTES.SETTINGS)) {
    Variant = SettingsNavMenu;
  } else if (pathname.startsWith(ROUTES.STUDIO)) {
    Variant = LocalNavMenu;
  }

  return (
    <Aside>
      <Variant />
    </Aside>
  );
};
