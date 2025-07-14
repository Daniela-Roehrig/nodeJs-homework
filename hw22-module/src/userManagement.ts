export namespace UserManagement {
    export namespace Admin {
        export class AdminUser {
            name: string;
            email: string;
            isSuperAdmin: boolean;

            constructor(name: string, email: string, isSuperAdmin: boolean = false) {
                this.name = name;
                this.email = email;
                this.isSuperAdmin = isSuperAdmin;
            }

            allowSuperAdmin() {
                this.isSuperAdmin = true;
            }

            forbidSuperAdmin() {
                this.isSuperAdmin = false;
            }
        }
    }
}
