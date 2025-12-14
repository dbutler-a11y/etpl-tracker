"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, Check, X, ExternalLink, Loader2 } from "lucide-react";

interface DocumentLinkInputProps {
  taskGroupId: string;
  documentLink: string | null;
  onSave: (taskGroupId: string, link: string) => void;
  isPending?: boolean;
}

export function DocumentLinkInput({
  taskGroupId,
  documentLink,
  onSave,
  isPending,
}: DocumentLinkInputProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(documentLink || "");
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    onSave(taskGroupId, value);
    // Simulate delay for visual feedback, actual save is handled by parent
    setTimeout(() => {
      setIsSaving(false);
      setIsEditing(false);
    }, 500);
  };

  const handleCancel = () => {
    setValue(documentLink || "");
    setIsEditing(false);
  };

  if (documentLink && !isEditing) {
    return (
      <div className="flex items-center gap-2 mt-3 p-2 bg-blue-50 rounded-md">
        <Link className="h-4 w-4 text-blue-600 flex-shrink-0" />
        <a
          href={documentLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:underline truncate flex-1"
        >
          {documentLink}
        </a>
        <ExternalLink className="h-3 w-3 text-blue-600 flex-shrink-0" />
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsEditing(true)}
          className="h-6 px-2 text-xs"
        >
          Edit
        </Button>
      </div>
    );
  }

  if (isEditing || !documentLink) {
    return (
      <div className="flex items-center gap-2 mt-3">
        <Input
          type="url"
          placeholder="Add document link (Google Drive, etc.)"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="text-sm h-8"
          disabled={isPending || isSaving}
        />
        <Button
          variant="ghost"
          size="sm"
          onClick={handleSave}
          disabled={isPending || isSaving || !value}
          className="h-8 w-8 p-0"
        >
          {isSaving ? (
            <Loader2 className="h-4 w-4 text-blue-600 animate-spin" />
          ) : (
            <Check className="h-4 w-4 text-green-600" />
          )}
        </Button>
        {isEditing && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCancel}
            disabled={isSaving}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4 text-red-600" />
          </Button>
        )}
      </div>
    );
  }

  return null;
}
