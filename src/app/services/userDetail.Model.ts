export class UserDetail {
    UserId: number;
    UserName: string;
    EmailId: string;
    FullName: string;
    City: string;
    State: string;
    ZipCode: number;
    Password: string;

    public UserDetail(_userId: number, _userName: string, _emailId: string, _fullName: string,
        _city: string, _state: string, _zipCode: number, _password: string) {
        this.UserId = _userId,
            this.UserName = _userName,
            this.EmailId = _emailId,
            this.FullName = _fullName,
            this.City = _city,
            this.State = _state,
            this.ZipCode = _zipCode,
            this.Password = _password
    }
}