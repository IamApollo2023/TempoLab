import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface ApplicationFormProps {
  onSubmit?: (data: any) => void;
}

const ApplicationForm = ({ onSubmit = () => {} }: ApplicationFormProps) => {
  return (
    <Card className="w-full max-w-4xl mx-auto p-8 bg-white shadow-md">
      <div className="flex items-start gap-4 mb-8">
        <img src="/vite.svg" alt="DMMMSU Logo" className="h-16 w-16" />
        <div className="flex-grow">
          <h1 className="text-2xl font-bold text-gray-900">
            COLLEGE ADMISSION APPLICATION FORM
          </h1>
          <div className="mt-4 space-y-2">
            <div className="flex gap-4">
              <Label>Application Date:</Label>
              <Input type="date" className="w-48" />
            </div>
            <div className="flex gap-4">
              <Label>Batch No. (For DMMMSU use only):</Label>
              <Input disabled className="w-48" />
            </div>
            <div className="flex gap-4">
              <Label>Control No. (For DMMMSU use only):</Label>
              <Input disabled className="w-48" />
            </div>
          </div>
        </div>
        <div className="border border-gray-300 w-32 h-32 flex items-center justify-center text-sm text-gray-500 p-2 text-center">
          Latest 2"x2" ID picture in white background with name tag
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(new FormData(e.currentTarget));
        }}
      >
        <div className="space-y-6">
          {/* First-time applicant section */}
          <div className="space-y-4">
            <div className="flex gap-8">
              <Label className="flex items-center gap-2">
                Are you a first-time DMMMSU applicant?
                <div className="flex gap-4">
                  <RadioGroup defaultValue="yes" className="flex">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no">No</Label>
                    </div>
                  </RadioGroup>
                </div>
              </Label>
            </div>
            <div className="flex gap-8">
              <Label className="flex items-center gap-2">
                Have you filed your College Admission application in other
                DMMMSU Campus?
                <div className="flex gap-4">
                  <RadioGroup defaultValue="no" className="flex">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="campus-yes" />
                      <Label htmlFor="campus-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <RadioGroupItem value="no" id="campus-no" />
                      <Label htmlFor="campus-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>
              </Label>
            </div>
          </div>

          {/* Name Section */}
          <div>
            <Label>Name (Pls. Print):</Label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
              <div>
                <Input id="lastName" name="lastName" placeholder="Last Name" />
              </div>
              <div>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                />
              </div>
              <div>
                <Input
                  id="middleName"
                  name="middleName"
                  placeholder="Middle Name"
                />
              </div>
            </div>
          </div>

          {/* LRN and Personal Info */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex gap-2 items-center">
              <Label htmlFor="lrn">LRN:</Label>
              <Input id="lrn" name="lrn" className="w-48" />
            </div>
            <div className="flex gap-2 items-center">
              <Label htmlFor="birthdate">Birthdate:</Label>
              <Input
                type="date"
                id="birthdate"
                name="birthdate"
                className="w-48"
              />
            </div>
            <div className="flex gap-2 items-center">
              <Label htmlFor="age">Age:</Label>
              <Input id="age" name="age" className="w-20" />
            </div>
            <div className="flex gap-2 items-center">
              <Label>Citizenship:</Label>
              <div className="flex gap-4">
                <Label className="flex items-center gap-2">
                  <Checkbox id="filipino" />
                  Filipino
                </Label>
                <Label className="flex items-center gap-2">
                  <Checkbox id="foreigner" />
                  Foreigner (Specify)
                </Label>
                <Input className="w-48" placeholder="Specify citizenship" />
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <Label>Home Address:</Label>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
              <Input placeholder="Barangay" />
              <Input placeholder="Municipality/City" />
              <Input placeholder="Province" />
              <Input placeholder="Zip Code" />
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="email">E-mail Address:</Label>
              <Input type="email" id="email" name="email" />
            </div>
            <div>
              <Label htmlFor="mobile">Active Mobile No.:</Label>
              <Input id="mobile" name="mobile" />
            </div>
            <div>
              <Label htmlFor="sex">Sex:</Label>
              <Input id="sex" name="sex" />
            </div>
          </div>

          {/* Applicant Type */}
          <div className="space-y-4">
            <Label>Please Check:</Label>
            <div className="space-y-6">
              <div className="space-y-4">
                <Label className="flex items-center gap-2">
                  <Checkbox id="freshman" />
                  Incoming Freshman
                </Label>
                <div className="ml-6 space-y-2">
                  <div>
                    <Label>School from which you graduated:</Label>
                    <Input className="mt-1" />
                  </div>
                  <div>
                    <Label>Address:</Label>
                    <Input className="mt-1" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Track:</Label>
                      <Input className="mt-1" />
                    </div>
                    <div>
                      <Label>Strand:</Label>
                      <Input className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <Label>School Year Graduated:</Label>
                    <Input className="mt-1" />
                  </div>
                  <div>
                    <Label>Type of School:</Label>
                    <div className="flex gap-4 mt-1">
                      <Label className="flex items-center gap-2">
                        <Checkbox />
                        Private
                      </Label>
                      <Label className="flex items-center gap-2">
                        <Checkbox />
                        Public
                      </Label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Label className="flex items-center gap-2">
                  <Checkbox id="transferee" />
                  Transferee
                </Label>
                <div className="ml-6 space-y-2">
                  <div>
                    <Label>School last attended:</Label>
                    <Input className="mt-1" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Address:</Label>
                      <Input className="mt-1" />
                    </div>
                    <div>
                      <Label>Sem/SY:</Label>
                      <Input className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <Label>Type of School:</Label>
                    <div className="flex gap-4 mt-1">
                      <Label className="flex items-center gap-2">
                        <Checkbox />
                        Private
                      </Label>
                      <Label className="flex items-center gap-2">
                        <Checkbox />
                        Public
                      </Label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Label className="flex items-center gap-2">
                  <Checkbox id="secondCourse" />
                  Second Course
                </Label>
                <div className="ml-6 space-y-2">
                  <div>
                    <Label>School from which you graduated:</Label>
                    <Input className="mt-1" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Address:</Label>
                      <Input className="mt-1" />
                    </div>
                    <div>
                      <Label>Year Graduated:</Label>
                      <Input className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <Label>Type of School:</Label>
                    <div className="flex gap-4 mt-1">
                      <Label className="flex items-center gap-2">
                        <Checkbox />
                        Private
                      </Label>
                      <Label className="flex items-center gap-2">
                        <Checkbox />
                        Public
                      </Label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Campus and Course Preference */}
          <div className="space-y-4">
            <div>
              <Label>Campus Preference:</Label>
              <div className="flex gap-4 mt-2">
                <Label className="flex items-center gap-2">
                  <Checkbox id="nluc" />
                  NLUC
                </Label>
                <Label className="flex items-center gap-2">
                  <Checkbox id="mluc" />
                  MLUC
                </Label>
                <Label className="flex items-center gap-2">
                  <Checkbox id="sluc" />
                  SLUC
                </Label>
                <Label className="flex items-center gap-2">
                  <Checkbox id="ous" />
                  OUS
                </Label>
              </div>
            </div>

            <div>
              <Label>Course Preference:</Label>
              <div className="grid grid-cols-1 gap-4 mt-2">
                <div>
                  <Label>First Priority:</Label>
                  <Input className="mt-1" />
                </div>
                <div>
                  <Label>Second Priority:</Label>
                  <Input className="mt-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Declaration and Signatures */}
          <div className="space-y-4 border-t pt-4">
            <p className="text-sm text-gray-600">
              I hereby declare that all information in this application is true
              and correct. I understand that any false information may be a
              ground for disqualification for Admission in the University.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="border-t border-gray-400 mt-8 pt-2 text-center">
                <p className="text-sm">Name and Signature of Applicant</p>
              </div>
              <div className="border-t border-gray-400 mt-8 pt-2 text-center">
                <p className="text-sm">Name and Signature of SAS Personnel</p>
              </div>
              <div className="border-t border-gray-400 mt-8 pt-2 text-center">
                <p className="text-sm">Date</p>
              </div>
            </div>
          </div>

          {/* Requirements Section */}
          <div className="border-t pt-4">
            <h3 className="font-bold mb-2">
              COLLEGE ADMISSION TEST REQUIREMENTS:
            </h3>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li>
                Two (2) pieces 2"x2" identical I.D. picture with name tag in
                white background
              </li>
              <li>GRADE 11 Photocopy of Form 138/Report Card</li>
              <li>
                FOR SENIOR HIGH SCHOOL GRADUATES: Photocopy of FORM 138/Report
                Card (Grade 12)
              </li>
              <li>
                FOR SENIOR HIGH SCHOOL STUDENTS Currently enrolled: Photocopy of
                Grade 12 – First Semester Grades FORM 138/Report Card signed by
                the School Head/Principal or authorized representative
              </li>
              <li>
                FOR TRANSFEREES: Photocopy of Official Transcript of Records or
                Certified True Copy of Grades.
              </li>
              <li>
                FOR 2ND COURSE: Photocopy of Official Transcript of Records
              </li>
              <li>
                FOR LIFE-LONG LEARNERS: Photocopy of Form 138/Report Card (FOR
                OUS Applicants)
              </li>
            </ol>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-600 mb-2">DMMMSU-SAR-F051</p>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default ApplicationForm;
