import authRoles from '../auth/authRoles';

const navigation = [
    {
        'id': 'main',
        'title': 'Admin',
        'children': [
            {
                'id': 'users',
                'title': 'Users',
                'type': 'item',
                'icon': 'person_pin',
                auth: authRoles.admin,
                'url': '/admin/users'
            },
        ]
    },
];

export default navigation;
