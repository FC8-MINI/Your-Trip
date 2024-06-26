import { useForm, Controller } from "react-hook-form";
import { TermsContainer, ButtonContainer, StyledButton, TermItem, BoldLabel, RegularLabel } from "./PayTerms.styles";
import { PayTermsProps, FormValues } from "./PayTerms.types";

const terms = [
  { id: "agreeAll", label: "필수 약관 전체 동의" },
  { id: "agreeAge", label: "만 14세 이상 이용 동의" },
  { id: "agreeCollect", label: "개인정보 수집 및 이용" },
  { id: "agreeProvide", label: "개인정보 제 3자 제공" },
];

const PayTerms: React.FC<PayTermsProps> = ({ amount }) => {
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

  const onSubmit = () => {
    alert("결제가 완료되었습니다");
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
        <StyledButton $size="large" onClick={handleSubmit(onSubmit)} disabled={!allTermsChecked}>
          {amount.toLocaleString()}원 결제하기
        </StyledButton>
      </ButtonContainer>
    </TermsContainer>
  );
};

export default PayTerms;
