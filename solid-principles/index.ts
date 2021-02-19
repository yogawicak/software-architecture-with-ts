/**
 * Inheritance
 */
//use case: object Group mewariskan User

interface IGroupProps {
    group_name: string;
    groupId: number;
}

class Group {
    user: User;

    public get User(): User {
        return this.User;
    }

    public set User(User: User) {
        this.User = User;
    }
}

class User extends Group {
    //
}
