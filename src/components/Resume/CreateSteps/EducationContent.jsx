import {
  useDispatch,
  useSelector,
} from 'react-redux';
import ResumeInput from '../ResumeInput';
import { resumeActions } from '../../../store/resume-slice';
import { useEffect, useRef } from 'react';

const EducationContent = () => {
  const dispatch = useDispatch();

  // initialize
  const { education } = useSelector(
    (state) => state.resume,
  );

  const gradeEducationRef = useRef(null);
  const fieldOfStudyRef = useRef(null);
  // const startDateRef = useRef(null);
  // const endDateRef = useRef(null);
  const nameUniversityRef = useRef(null);

  const {
    gradeEducation,
    fieldOfStudy,
    // startDate,
    // endDate,
    nameUniversity,
  } = education;

  useEffect(() => {
    gradeEducationRef.current.value =
      gradeEducation;
    fieldOfStudyRef.current.value = fieldOfStudy;
    // startDateRef.current.value = startDate;
    // endDateRef.current.value = endDate;
    nameUniversityRef.current.value =
      nameUniversity;
  }, []);

  const gradeEducationChangeHandler = (e) => {
    const gradeEducation_value = e.target.value;

    dispatch(
      resumeActions.changeEducation({
        prop: 'gradeEducation',
        value: gradeEducation_value,
      }),
    );
  };

  const fieldOfStudyChangeHandler = (e) => {
    const fieldOfStudy_value = e.target.value;

    dispatch(
      resumeActions.changeEducation({
        prop: 'fieldOfStudy',
        value: fieldOfStudy_value,
      }),
    );
  };

  const startDateChangeHandler = (
    date,
    dateString,
  ) => {
    dispatch(
      resumeActions.changeEducation({
        prop: 'startDate',
        value: dateString,
      }),
    );
  };

  const endDateChangeHandler = (
    date,
    dateString,
  ) => {
    dispatch(
      resumeActions.changeEducation({
        prop: 'endDate',
        value: dateString,
      }),
    );
  };

  const nameUniversityChangeHandler = (e) => {
    const nameUniversity_value = e.target.value;

    dispatch(
      resumeActions.changeEducation({
        prop: 'nameUniversity',
        value: nameUniversity_value,
      }),
    );
  };

  return (
    <div className="resume-step-content">
      <div className="grid grid-cols-2 gap-20 pt-8">
        <ResumeInput
          label="???????? ????????????"
          type="text"
          name="grade-education"
          onChange={gradeEducationChangeHandler}
          placeholder="????????????????"
          innerRef={gradeEducationRef}
        />
        <ResumeInput
          label="???????? ????????????"
          type="text"
          placeholder="???????????? ????????????????"
          name="field-of-study"
          onChange={fieldOfStudyChangeHandler}
          innerRef={fieldOfStudyRef}
        />
      </div>
      <div className="grid grid-cols-2 gap-20 mt-8 mb-16">
        <div className="grid grid-cols-2 gap-12">
          <ResumeInput
            label="?????????? ????????"
            type="date"
            name="start-date"
            placeholder="???????? ????????"
            onChange={startDateChangeHandler}
            // innerRef={startDateRef}
          />
          <ResumeInput
            label="?????????? ??????????"
            type="date"
            name="end-date"
            onChange={endDateChangeHandler}
            // innerRef={endDateRef}
          />
        </div>
        <ResumeInput
          label="?????? ??????????????"
          type="text"
          name="name-university"
          placeholder="?????????? ?????????????? ??????"
          onChange={nameUniversityChangeHandler}
          innerRef={nameUniversityRef}
        />
      </div>
    </div>
  );
};

export default EducationContent;
