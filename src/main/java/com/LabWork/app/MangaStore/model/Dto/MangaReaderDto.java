package com.LabWork.app.MangaStore.model.Dto;

import com.LabWork.app.MangaStore.model.Default.Creator;
import com.LabWork.app.MangaStore.model.Default.Manga;
import com.LabWork.app.MangaStore.model.Default.Reader;
import com.LabWork.app.MangaStore.model.Dto.SupportDto.ReaderDto;

import java.util.List;

public class MangaReaderDto {
    private final Long id;

    private final Long creatorId;
    private final String mangaName;
    private final Integer chapterCount;

    private final List<ReaderDto> readers;

    public MangaReaderDto(Manga manga, List<Reader> listReader) {
        this.id = manga.getId();
        this.creatorId = manga.getCreator().getId();
        this.mangaName = manga.getMangaName();
        this.chapterCount = manga.getChapterCount();
        this.readers = listReader.stream()
                .map(y -> new ReaderDto(y))
                .toList();
    }

    public Long getId() {
        return id;
    }

    public String getMangaName() {
        return mangaName;
    }

    public List<ReaderDto> getReaders() {
        return readers;
    }

    public Integer getChapterCount() {
        return chapterCount;
    }

    public Long getCreatorId() {
        return creatorId;
    }

}