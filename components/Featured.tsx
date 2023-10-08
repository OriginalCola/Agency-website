import {Tabs, Tab} from "@nextui-org/react"; 

export default function Featured() {
  return (
    <div className="px-64 bg-color-back">
        <div className="flex flex-wrap gap-4">
            <Tabs key="underlined" color="primary" variant="underlined" aria-label="Tabs variants">
                <Tab key="photos" title="Featured in"/>
                <Tab key="music" title="Works"/>
                <Tab key="videos" title="Certifications"/>
            </Tabs>
        </div>
    </div>
  );
}
