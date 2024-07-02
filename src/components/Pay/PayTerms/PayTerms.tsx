import { useForm, Controller } from "react-hook-form";
import {
  TermsContainer,
  ButtonContainer,
  TermItem,
  BoldLabel,
  RegularLabel,
  PayButtonStyled,
  ViewRes,
} from "./PayTerms.styles";
import { PayTermsProps, FormValues } from "./PayTerms.types";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const terms = [
  { id: "agreeAll", label: "필수 약관 전체 동의" },
  { id: "agreeAge", label: "만 14세 이상 이용 동의" },
  { id: "agreeCollect", label: "개인정보 수집 및 이용" },
  { id: "agreeProvide", label: "개인정보 제 3자 제공" },
];

const PayTerms = ({ amount }: PayTermsProps) => {
  const { control, setValue, watch, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      agreeAll: false,
      agreeAge: false,
      agreeCollect: false,
      agreeProvide: false,
      isSubmitted: false,
    },
  });

  const formValues = watch();

  const handleAgreeAllChange = (checked: boolean) => {
    terms.slice(1).forEach((term) => {
      setValue(term.id as keyof FormValues, checked);
    });
  };

  const areAllTermsChecked = terms.slice(1).every((term) => formValues[term.id as keyof FormValues]);

  if (formValues.agreeAll !== areAllTermsChecked) {
    setValue("agreeAll", areAllTermsChecked);
  }

  const allTermsChecked = terms.every((term) => formValues[term.id as keyof FormValues]);

  const MySwal = withReactContent(Swal);

  const onSubmit = async () => {
    await MySwal.fire({
      title: "결제가 완료되었습니다.",
      html: <ViewRes href="/reservation">예약내역 조회</ViewRes>,
      showConfirmButton: false,
      customClass: {
        confirmButton: "btn btn-primary",
      },
    });
  };

  return (
    <TermsContainer>
      {terms.map((term) => (
        <Controller
          key={term.id}
          name={term.id as keyof FormValues}
          control={control}
          render={({ field }) => (
            <TermItem>
              <input
                type="checkbox"
                checked={field.value || false}
                onChange={(e) => {
                  field.onChange(e.target.checked);
                  if (term.id === "agreeAll") {
                    handleAgreeAllChange(e.target.checked);
                  }
                }}
              />
              {term.id === "agreeAll" ? <BoldLabel>{term.label}</BoldLabel> : <RegularLabel>{term.label}</RegularLabel>}
            </TermItem>
          )}
        />
      ))}
      <ButtonContainer>
        <PayButtonStyled $size="large" onClick={handleSubmit(onSubmit)} disabled={!allTermsChecked}>
          {amount.toLocaleString()}원 결제하기
        </PayButtonStyled>
      </ButtonContainer>
    </TermsContainer>
  );
};

export default PayTerms;
