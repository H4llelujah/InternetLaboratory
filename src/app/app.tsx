import { Button } from "@/shared/ui/Button/Button";
import { MainLayout } from "@/shared/layout/MainLayout/MainLayout";
import { Input } from "@/shared/ui/Input/Input";

export const App = () => {
    return (
        <div>
            <MainLayout
                content={<Button>test</Button>}
                footer={<Input label="test" />}
                header={<div>header</div>}
            />
        </div>
    );
};
