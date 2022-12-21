export interface Laborant {
    Id?:number,
    Name?:String,
    Surname?:String,
    EMail: String,
    Password:String
}

export interface Patient {
    Id?:number,
    Name?:String,
    Surname?:String,
    EMail: String,
    Password:String
}

export interface Test{
    Id?:number,
    Name:String,
    TestProperties: TestProperty[]
} 

export interface TestProperty{
    index?:number,
    Id?: number,
    Name:String,
    Unit:String,
    TestId?:number,
    Test?:Test,
    ReferenceMax:number,
    ReferenceMin:number
}

export interface PatientTest{
    Id?:number,
    PatientId?: number,
    Patient:Patient,
    TestId: number,
    Test:Test,
    Date:Date
    PatientTestProperties: PatientTestProperty[]
}

export interface PatientTestProperty{
    Id?: number,
    Value:number,
    PatientTestId:number,
    PatientTest:PatientTest,
    TestPropertyId:number,
    TestProperty:TestProperty
}
