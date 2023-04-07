package com.LabWork.app.MangaStore.model.Dto.SupportDto;

import com.LabWork.app.MangaStore.model.Default.Reader;

import java.util.List;

public class ReaderDto {
    private Long id;

    private String readerName;

    private String hashedPassword;

    public ReaderDto(Reader reader) {
        this.id = reader.getId();
        this.readerName = reader.getReaderName();
        this.hashedPassword = reader.getHashedPassword();
    }

    public Long getId() {
        return id;
    }

    public String getReaderName() { return readerName; }

    public String getHashedPassword() { return hashedPassword; }
}