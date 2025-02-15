import { redirect } from 'react-router-dom';

export const config = {
  constant: true,
  i18nKey: 'route.manage',
  title: 'manage'
};

export const loader = () => {
  return redirect('/manage/menu');
};
